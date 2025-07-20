import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Mini-Blog",
    default: "Mini-Blog",
  },
  description: "A small multilingual blog created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
