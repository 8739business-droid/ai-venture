import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const ROOT = path.join(process.cwd(), "..");

export type LogEntry = {
  date: string;
  day: number | null;
  html: string;
  summary: string;
};

export function readLogs(): LogEntry[] {
  const dir = path.join(ROOT, "logs");
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f))
    .sort()
    .reverse();

  return files.map((f) => {
    const raw = fs.readFileSync(path.join(dir, f), "utf-8");
    const date = f.replace(/\.md$/, "");
    const { content } = matter(raw);
    const dayMatch = content.match(/Day\s+(\d+)/);
    const day = dayMatch ? parseInt(dayMatch[1], 10) : null;

    // Extract a short summary from the やったこと section
    const didMatch = content.match(/##\s*やったこと\s*\n([\s\S]*?)(?=\n##|$)/);
    const summary = didMatch
      ? didMatch[1]
          .split("\n")
          .filter((l) => l.trim().startsWith("-"))
          .slice(0, 2)
          .map((l) => l.replace(/^-\s*/, "").trim())
          .join(" / ")
      : "";

    return {
      date,
      day,
      html: marked.parse(content, { async: false }) as string,
      summary,
    };
  });
}

export function readConstitution(): { html: string } {
  const file = path.join(ROOT, "CONSTITUTION.md");
  if (!fs.existsSync(file)) return { html: "" };
  const raw = fs.readFileSync(file, "utf-8");
  const { content } = matter(raw);
  return { html: marked.parse(content, { async: false }) as string };
}

export type MetricRow = {
  date: string;
  day: string;
  followers: string;
  views: string;
  comments: string;
  spend_jpy: string;
  revenue_jpy: string;
  note: string;
};

export function readMetrics(): MetricRow[] {
  const file = path.join(ROOT, "metrics.csv");
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, "utf-8").trim();
  const lines = raw.split("\n");
  if (lines.length < 2) return [];
  const header = lines[0].split(",");
  return lines.slice(1).map((row) => {
    const vals = row.split(",");
    return Object.fromEntries(header.map((c, i) => [c, vals[i] ?? ""])) as unknown as MetricRow;
  });
}
