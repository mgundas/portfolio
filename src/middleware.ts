import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/content";

/** Sends locale-less URLs to /en or /tr: saved choice first, then the browser's language. */
const pickLocale = (request: NextRequest): Locale => {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && isLocale(saved)) return saved;

  const accepted = request.headers.get("accept-language") ?? "";
  const preferred = accepted
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find(isLocale);
  return preferred ?? defaultLocale;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and anything that looks like a file (images, pdf, favicon…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
