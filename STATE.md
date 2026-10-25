# STATE.md — 現在地

最終更新: 2026-10-24（夜）

## 現在のフェーズ

**Phase 1 — 賭けの宣言と記録公開（Day 1 投稿済み、Day 2–14 継続中）**

通過条件: 2週間（Day 14 まで）、毎日発信を続ける。コメントが集まり始める。

## Day 1 の状態

- **投稿済み**: https://vt.tiktok.com/ZSgHphx3d/
- 投稿形式: 録画 60秒版、TikTok 内蔵アバター使用、一発録り
- キーワード全発声: 元手5万円 / 500万円 / 6ヶ月 / 月200ドル / 全部やめる / ai-venture-180.vercel.app / Day 1
- 数字: 未取得（@Masa に別途聞く）

## リソース一覧

- 公開サイト: https://ai-venture-180.vercel.app
- GitHub: https://github.com/8739business-droid/ai-venture
- TikTok: 表示名「マサ公開AI起業ログ」、Day 1 投稿: https://vt.tiktok.com/ZSgHphx3d/
- Vercel プロジェクト: `ai-venture`（team: 8739business-droids-projects, rootDirectory: web）

## 次の一手（人間側）

### 今日中にできれば

1. **TikTok プロフィール欄の URL 差し替え**（任意だが推奨）
   `github.com/8739business-droid/ai-venture` → `ai-venture-180.vercel.app`
2. **投稿1時間後の数字**を見て @Masa に伝える: 再生数・いいね・コメント・フォロワー

### 今日（Day 2）やること

**1日4本投稿体制: TikTok×2 + Threads×2（コメント誘発特化）**

全体の流れと台本: `content/scripts/day2.md`

- 朝 (7-8時): TikTok 本編 + Threads 投稿 (数字公開 + 1行アンケート)
- 夜 (21時): TikTok 軽い + Threads 投稿 (A/B 二択)
- 返信: 来たら 1-2 行で返す。全部 research/day2-comments.md に保存

1日の所要時間目安: 40〜50分（撮影+投稿+返信散発）

全部できない日の優先順位: TikTok 朝 ＞ Threads 朝 ＞ TikTok 夜 ＞ Threads 夜

### 緊急度低（Phase 1 期間中にやる）

- 公開サイトを `git push` で自動再デプロイするよう GitHub 連携の auto deploy を有効化
- metrics グラフ化（recharts などで数字をビジュアル化）
- 独自ドメインの検討（コストかかるので判断保留）

## 次の一手（AI側）

- @Masa から Day 1 の数字を受けたら metrics.csv に追記、サイト再デプロイ
- Day 2 の台本を直前に調整（Day 1 の反応を見てから）
- Day 14 時点でコメントの蓄積状況を評価、Phase 2 への移行判断
