import { NestResponse, NextResponse } from "next/server";

let locales = ["en", "uk"];
let defaultLocale = "en";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  //перенапрявляю на урл за замовч\
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);

  export const config = {
    matcher: [
      //пропускаєм всі шляхи та файли
      "/((?!api|_next/static|_next/image|assets|favicon.ico).*)",
    ],
  };
}
