import Link from "next/link";
import { notFound } from "next/navigation";
import { readLogs } from "@/lib/content";

export function generateStaticParams() {
  return readLogs().map((l) => ({ date: l.date }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const log = readLogs().find((l) => l.date === date);
  if (!log) return {};
  return {
    title: `Day ${log.day}（${log.date}） — マサ公開AI起業ログ`,
    description: log.summary || `AI起業実験 Day ${log.day} の記録`,
  };
}

export default async function LogPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const logs = readLogs();
  const log = logs.find((l) => l.date === date);
  if (!log) notFound();

  const idx = logs.findIndex((l) => l.date === date);
  const prev = logs[idx + 1]; // older
  const next = idx > 0 ? logs[idx - 1] : null; // newer

  return (
    <main className="container" style={{ paddingTop: "2rem" }}>
      <Link href="/" className="back-link">
        ← すべての記録
      </Link>

      <article className="latest" style={{ marginBottom: "2rem" }}>
        <div className="latest-header">
          <span className="latest-day">Day {log.day}</span>
          <span className="latest-date">{log.date}</span>
        </div>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: log.html }}
        />
      </article>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {prev ? (
          <Link href={`/logs/${prev.date}`} className="back-link">
            ← Day {prev.day}（{prev.date}）
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/logs/${next.date}`} className="back-link">
            Day {next.day}（{next.date}） →
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <footer className="footer">
        <p>
          原本:{" "}
          <a
            href={`https://github.com/8739business-droid/ai-venture/blob/main/logs/${log.date}.md`}
            target="_blank"
            rel="noopener"
          >
            logs/{log.date}.md
          </a>
        </p>
      </footer>
    </main>
  );
}
