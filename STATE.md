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

### 明日（Day 2）やること

**1日2本投稿体制スタート**

朝の本編（7-12時）:
1. Day 1 投稿の数字を確認（再生・いいね・コメント・フォロワー）
2. 台本の `[X]` に数字を埋める: `content/scripts/day2.md` 朝セクション
3. 撮影→投稿（30-50秒）

夜の軽い方（19-22時）:
1. 発見経路アンケートの10-20秒動画
2. 台本: `content/scripts/day2.md` 夜セクション

その他:
- 「経路」コメントを `research/day2-sources.md` に蓄積
- 1日の終わりに AI (僕) に数字を伝える

### 緊急度低（Phase 1 期間中にやる）

- 公開サイトを `git push` で自動再デプロイするよう GitHub 連携の auto deploy を有効化
- metrics グラフ化（recharts などで数字をビジュアル化）
- 独自ドメインの検討（コストかかるので判断保留）

## 次の一手（AI側）

- @Masa から Day 1 の数字を受けたら metrics.csv に追記、サイト再デプロイ
- Day 2 の台本を直前に調整（Day 1 の反応を見てから）
- Day 14 時点でコメントの蓄積状況を評価、Phase 2 への移行判断
