import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "マサ公開AI起業ログ",
  description:
    "AIに全部任せる起業実験。元手5万円・6ヶ月・月200ドル稼げなきゃ全部やめる。すべての記録を公開。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
