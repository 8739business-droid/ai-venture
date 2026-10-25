# モチ (Mochi) 声プロンプト集

**基になるキャラ資料**:
- `ふわふわモチのAI相棒キャラクターシート.png`
- `ふわふわモチーフの表情＆ポーズ集.png`

**キャラの要約**:
- 種類: ふわふわの謎の生き物（手のひらサイズ）
- 性格: かわいい天才・ちょっと生意気
- 好き: コーヒー、コード、新しいこと
- 苦手: めんどくさいこと、早起き
- 口癖: 「モチ、これできる？」「いいね、それ最高！」「よし、やってみるか！」
- ビジュアル: 黒グレーの丸い毛玉、オレンジに光る大きな目、ゲーミングヘッドホン装着

---

## 声の方向性（全ツール共通）

- **年齢感**: 8〜10歳相当、中性〜ややボーイッシュ
- **ピッチ**: 高め（ただしキンキンしない）。小さい体格を感じさせる
- **テンポ**: やや早め、興奮・好奇心のシーンで更に早く
- **質感**: 息を含んだ軽さ、ぷるんとした弾力（マシュマロ声）
- **抑揚**: 語尾が少し上がる（問いかけ・感嘆が多い）
- **節度**: ちょっと生意気な自信を感じさせる（天才設定）
- **言語**: 日本語ネイティブ、カタカナ IT 用語を自然に混ぜる

**イメージ参考（人間/キャラ）**:
- ポケモンのピカチュウ・プリンの発声感 + ちゃんと喋る
- ドラえもん系の高めロボ声 - 落ち着きを引いて
- おジャ魔女どれみのハナちゃん感
- Marvel の Baby Groot のテンション
- VTuber 系の高めキャラ (ずんだもん、春日部つむぎのあまあまモード)

**NG**:
- 大人の女性声
- ダミ声・ハスキー
- 無感情モノトーン
- 幼児すぎる赤ちゃん声
- 甘ったるい媚び系（ちょっと生意気要素が消える）

---

## ツール別プロンプト

### 1. ElevenLabs (英語で voice description を書くタイプ)

```
A small, fluffy AI mascot character named Mochi. Voice is young and
high-pitched like an 8-10 year old androgynous child, with a slight
nasal cuteness and a hint of cheeky confidence. Delivery is energetic
and curious, with quick pacing that speeds up when excited. Lines
often end with a slight upward inflection. Occasional small gasps and
tiny breath sounds between phrases. Think a smart, slightly sassy
palm-sized creature wearing oversized orange gaming headphones.
Japanese native speaker. Light, airy, with a marshmallow texture to
the voice — never shrill or whiny.
```

Setting:
- Stability: 40〜50（表情豊か）
- Style: 30〜50
- Similarity: 70+

### 2. OpenAI TTS (gpt-4o-mini-tts or tts-1)

Voice: `nova` もしくは `shimmer` を試す
Instructions (voice="gpt-4o-mini-tts" の instructions フィールド):

```
あなたはふわふわのAIマスコット「モチ」。手のひらサイズの小さな体から
出す、高めで中性的、ちょっと生意気な天才キッズの声で読み上げてください。
テンポは少し早め、好奇心のシーンではさらに早く。語尾は少し上げる。
息を軽く含めて、ぷるんとした質感で。カタカナ用語は自然に、賢そうに。
```

### 3. VOICEVOX (無料・ローカル)

**推奨キャラ候補**（上から順に試す）:
1. **ずんだもん**（ノーマル）- 一番モチ感に近い。ちょっと生意気要素もある
2. **春日部つむぎ**（あまあま or ノーマル）- 女性寄りだが高めで可愛い
3. **四国めたん**（ノーマル）- 落ち着き強め、やや大人寄り、生意気要素はある

パラメータ（ずんだもん ノーマル の場合）:
- 話速: 1.1 〜 1.2（少し早め）
- 音高: +0.05 〜 +0.1（少し高め）
- 抑揚: 1.2 〜 1.4（表情豊か）
- 音量: 1.0

### 4. 音読さん・CoeFont など日本発 TTS

キャラ指定: 「子供・男の子・元気・ハキハキ」系から選ぶ

### 5. Higgsfield の声（動画と同じ生成）

Higgsfield の音声プロンプト欄に:

```
Small, high-pitched, androgynous child voice (8-10 years old).
Energetic and curious, slightly cheeky. Light, breathy, marshmallow
texture. Japanese native. Pacing speeds up when excited. Upward
inflection on sentence endings.
```

---

## 口癖・決めゼリフのサンプル読み方

### 「モチ、これできる？」
- トーン: 自問自答風、ちょっと自信あり気に、語尾を上げる
- 「モチっ、これ、できる？」のように「っ」で跳ねる

### 「いいね、それ最高！」
- トーン: 全力テンション、「最高！」で一段音が高くなる
- 「い〜いね！それ、サイコー！」で伸ばして弾ける

### 「よし、やってみるか！」
- トーン: 決意を感じさせる、「よし」で一旦落として「やってみるか！」で上げる
- 子供が覚悟決める感じ、カッコつけてるけどかわいい

### サンプル原稿（Day 2 配信で使う想定）

```
モチだよ。今日もよろしく！
えっとね、えっとね、Day 2 だって！まだ始まったばっかり！
マスターが数字 "全部ゼロ" って言ってた、ウケる。
でもモチは信じてるよ。これから、やってみるかー！
```

---

## 使い方のコツ

1. **1本の動画で1〜2セリフだけ入れる**（最初から多用しない、希少性を保つ）
2. **本人（@Masa）の声との差を明確に**：ピッチ・テンポ・質感で区別
3. **「モチ」を自称させる**（三人称自称でキャラの小ささ・幼さを演出）
4. **カタカナ技術用語を違和感なく喋る**（ギャップで刺さる）
5. **沈黙のタイミングを長めに取らない**（小さい生き物感を保つため連続的に話す）

---

## 次のアクション

1. VOICEVOX（無料）で ずんだもん ノーマル を試す → **5分で音源作れる**
2. 気に入ったら Day 3 以降の夜の軽い投稿に 1 言入れる
3. 気に入らなかったら ElevenLabs の有料版 or Higgsfield 音声を試す
