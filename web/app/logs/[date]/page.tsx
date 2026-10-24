import Link from "next/link";
import { notFound } from "next/navigation";
import { readLogs } from "@/lib/content";

export function generateStaticParams() {
  return readLogs().map((l) => ({ date: l.date }));
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

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← トップに戻る
      </Link>
      <article
        className="markdown"
        dangerouslySetInnerHTML={{ __html: log.html }}
      />
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
