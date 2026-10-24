import Link from "next/link";
import { readLogs, readMetrics } from "@/lib/content";

const TOTAL_DAYS = 180; // 2026-10-24 ～ 2027-04-30 の目安
const START_DATE = new Date("2026-10-24");

function daysSinceStart(): number {
  const now = new Date();
  const ms = now.getTime() - START_DATE.getTime();
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function Home() {
  const logs = readLogs();
  const latest = logs[0];
  const metrics = readMetrics();

  const currentDay = daysSinceStart();
  const progressPct = Math.min(100, (currentDay / TOTAL_DAYS) * 100);

  const totalSpend = metrics.reduce(
    (s, m) => s + (parseInt(m.spend_jpy, 10) || 0),
    0,
  );
  const totalRevenue = metrics.reduce(
    (s, m) => s + (parseInt(m.revenue_jpy, 10) || 0),
    0,
  );
  const latestMetric = metrics[metrics.length - 1];
  const latestFollowers = latestMetric
    ? parseInt(latestMetric.followers, 10) || 0
    : 0;

  return (
    <>
      <div className="statusbar">
        <div className="statusbar-inner">
          <span className="status-badge">Day {currentDay} / {TOTAL_DAYS}</span>
          <div
            className="status-progress"
            aria-label="進捗"
            role="progressbar"
            aria-valuenow={currentDay}
            aria-valuemin={0}
            aria-valuemax={TOTAL_DAYS}
          >
            <div
              className="status-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="status-phase">Phase 1 · 発信</span>
        </div>
      </div>

      <main className="container">
        <header className="hero">
          <div className="hero-eyebrow">AIに全部任せる起業実験</div>
          <h1 className="hero-big">
            元手<span className="accent">5万円</span>で
            <br />
            <span className="accent">500万円</span>。
          </h1>
          <p className="hero-sub">
            コードは書けません。事業も何にするかも AI に決めさせます。
            僕がやるのは承認だけ。売上も失敗も、毎日 GitHub にコミットします。
          </p>
          <div className="hero-stake">
            <strong>6ヶ月で月200ドル稼げなければ、全部やめます。</strong>
            {" "}嘘がつけない構造にしてあります。公開リポジトリと公開ログで、全部見えます。
          </div>
        </header>

        <section>
          <div className="section-title">現在の数字</div>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-label">経過</div>
              <div className="stat-value">
                {currentDay}
                <span className="unit">日目 / 180</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">フォロワー</div>
              <div className="stat-value">{latestFollowers.toLocaleString()}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">累計売上</div>
              <div className="stat-value">
                <span className="unit">¥</span>
                {totalRevenue.toLocaleString()}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">累計支出</div>
              <div className="stat-value">
                <span className="unit">¥</span>
                {totalSpend.toLocaleString()}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-title">ルール（変えない）</div>
          <div className="rules">
            <div className="rule-row">
              <div className="rule-key">元手</div>
              <div className="rule-val">5万円</div>
            </div>
            <div className="rule-row">
              <div className="rule-key">期限</div>
              <div className="rule-val">2027年4月末まで（約6ヶ月）</div>
            </div>
            <div className="rule-row">
              <div className="rule-key">生存ライン</div>
              <div className="rule-val">月200ドル（AI利用料を自力で稼ぐ）</div>
            </div>
            <div className="rule-row">
              <div className="rule-key">AI目標</div>
              <div className="rule-val">200万円（月商100万 / 累計500万）</div>
            </div>
            <div className="rule-row">
              <div className="rule-key">撤退条件</div>
              <div className="rule-val">期限内に生存ラインに届かなければ終了</div>
            </div>
            <div className="rule-row">
              <div className="rule-key">人間の役割</div>
              <div className="rule-val">ボタンを押す・承認する</div>
            </div>
          </div>
          <p className="rules-note">
            原本:{" "}
            <a
              href="https://github.com/8739business-droid/ai-venture/blob/main/CONSTITUTION.md"
              target="_blank"
              rel="noopener"
            >
              CONSTITUTION.md
            </a>
            {" "}· 条件を変える場合は履歴として残る形で起案
          </p>
        </section>

        {latest && (
          <section>
            <div className="section-title">最新の記録</div>
            <article className="latest">
              <div className="latest-header">
                <span className="latest-day">Day {latest.day}</span>
                <span className="latest-date">{latest.date}</span>
              </div>
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: latest.html }}
              />
            </article>
          </section>
        )}

        <section>
          <div className="section-title">全記録（日次ログ）</div>
          <ul className="timeline">
            {logs.map((l, i) => (
              <li
                key={l.date}
                className={`timeline-item ${i === 0 ? "current" : ""}`}
              >
                <Link href={`/logs/${l.date}`}>
                  <span className="timeline-day">Day {l.day}</span>
                  <span className="timeline-date">{formatDate(l.date)}</span>
                  {l.summary && (
                    <span className="timeline-summary">{l.summary}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <p>すべての記録は、第三者が検証できる形で公開されています。</p>
          <div className="footer-links">
            <a
              href="https://github.com/8739business-droid/ai-venture"
              target="_blank"
              rel="noopener"
            >
              GitHub（原本・コミット履歴）
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener"
            >
              TikTok（本人発信）
            </a>
          </div>
          <p className="footer-note">
            このサイトは静的生成。更新は手動デプロイ。<br />
            書き換え不可能なコミット履歴が「嘘がつけない構造」の実体です。
          </p>
        </footer>
      </main>
    </>
  );
}
