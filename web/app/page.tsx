import Link from "next/link";
import { readLogs, readMetrics } from "@/lib/content";

export default function Home() {
  const logs = readLogs();
  const latest = logs[0];
  const metrics = readMetrics();
  const totalDays = metrics.length;
  const totalSpend = metrics.reduce(
    (s, m) => s + (parseInt(m.spend_jpy, 10) || 0),
    0,
  );
  const totalRevenue = metrics.reduce(
    (s, m) => s + (parseInt(m.revenue_jpy, 10) || 0),
    0,
  );

  return (
    <main className="container">
      <header className="hero">
        <div className="hero-big">
          元手<span className="accent">5万円</span>で
          <br />
          <span className="accent">500万円</span>。
        </div>
        <div className="hero-sub">
          AIに全部任せる起業実験。
          <br />
          6ヶ月で月200ドル稼げなきゃ全部やめる。
          <br />
          売上も失敗も、毎日 GitHub にコミット。嘘がつけない構造にしてあります。
        </div>
      </header>

      <section>
        <h2>ルール</h2>
        <dl className="rule-grid">
          <dt>元手</dt>
          <dd>5万円</dd>
          <dt>期限</dt>
          <dd>2027年4月末まで（約6ヶ月）</dd>
          <dt>生存ライン</dt>
          <dd>月200ドル（AI利用料を自力で稼ぐ）</dd>
          <dt>AI目標</dt>
          <dd>200万円（月商100万 / 累計500万）</dd>
          <dt>撤退条件</dt>
          <dd>期限内に生存ラインに届かなければ終了</dd>
          <dt>人間の役割</dt>
          <dd>ボタンを押す・承認する</dd>
        </dl>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
          変えないルール。ファイル原本:{" "}
          <a
            href="https://github.com/8739business-droid/ai-venture/blob/main/CONSTITUTION.md"
            target="_blank"
            rel="noopener"
          >
            CONSTITUTION.md
          </a>
        </p>
      </section>

      <section>
        <h2>これまでの数字</h2>
        <dl className="rule-grid">
          <dt>経過日数</dt>
          <dd>{totalDays} 日</dd>
          <dt>累計支出</dt>
          <dd>¥{totalSpend.toLocaleString()}</dd>
          <dt>累計売上</dt>
          <dd>¥{totalRevenue.toLocaleString()}</dd>
        </dl>
      </section>

      {latest && (
        <section>
          <h2>
            最新 — Day {latest.day}（{latest.date}）
          </h2>
          <article
            className="markdown"
            dangerouslySetInnerHTML={{ __html: latest.html }}
          />
        </section>
      )}

      <section>
        <h2>全記録</h2>
        <ul className="log-list">
          {logs.map((l) => (
            <li key={l.date}>
              <Link href={`/logs/${l.date}`}>
                <span className="day-tag">Day {l.day}</span>
                <span className="log-date">{l.date}</span>
                <span className="log-summary">{l.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>
          すべての記録（コミット履歴・変更履歴を含む）は公開リポジトリにあります。
        </p>
        <p>
          <a
            href="https://github.com/8739business-droid/ai-venture"
            target="_blank"
            rel="noopener"
          >
            github.com/8739business-droid/ai-venture
          </a>
        </p>
      </footer>
    </main>
  );
}
