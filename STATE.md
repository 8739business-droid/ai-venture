# STATE.md — 現在地

最終更新: 2026-10-24

## 現在のフェーズ

**Phase 1 — 賭けの宣言と記録公開（Day 3–14）**

通過条件: 1本目を公開し、コメント/保存が集まり始める。

## 直近の決定

- decisions/001 承認済み: Phase 1 を「賭けの宣言」に組み替え
- 顔出し: 加工あり本人出演（TikTok 内蔵アバター機能で確定、Reality は保留）
- TikTok アカウント: 作成済み・表示名「マサ公開AI起業ログ」で確定
- GitHub リポジトリ: https://github.com/8739business-droid/ai-venture
- 公開サイト: https://ai-venture-8739business-droids-projects.vercel.app
- Vercel プロジェクト: `ai-venture`（team: 8739business-droids-projects, rootDirectory: web）
- Phase 1 の1本目〜3本目の台本: `content/scripts/day{1,2,3}.md`, `day1-live.md`

## 次の一手（人間側）

**配信/撮影:**

1. TikTok プロフィール欄に自己紹介文を貼る:
   ```
   AIに全部任せる起業実験
   元手5万円・6ヶ月・月200ドル稼げなきゃ全部やめる
   記録: ai-venture-8739business-droids-projects.vercel.app
   ```
2. TikTok の「+」→「LIVE」が押せるか確認
3. できなければ録画版（day1.md の短縮版、15–25秒）に切り替え
4. アバター効果を適用して台本を話す
5. 投稿前に @Masa 自身で最終確認（身バレ要素・数字の整合）
6. 投稿

**サイト仕上げ（任意、Phase 1 中に対応可）:**

- ドメインがもっと短い方が良ければ、Vercel のプロジェクト名変更 or 独自ドメイン購入を検討
- metrics グラフの追加（今はテキスト数字のみ）

## 次の一手（AI 側）

- 投稿後、@Masa から数字（再生数・コメント数・保存数）を聞いて日次ログに反映
- 公開サイトは `git push` では自動更新されないので、ログ更新のたびに `vercel deploy --yes` で再デプロイが必要（または GitHub 連携の自動デプロイを有効化する検討）
