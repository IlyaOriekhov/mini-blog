import { Inter } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { getDictionary } from "@/lib/dictionary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Mini-Blog",
    default: "Mini-Blog",
  },
  description: "A small multilingual blog created with Next.js.",
};

export default async function RootLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="container">
          <Header lang={lang} navigation={dict.navigation} />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
