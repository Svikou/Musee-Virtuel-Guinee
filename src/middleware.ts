// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: Activer la protection quand le back sera prêt

  // const { pathname } = request.nextUrl

  // if (pathname.startsWith("/admin")) {
  //   const token = request.cookies.get("your-auth-token")?.value

  //   if (!token) {
  //     return NextResponse.redirect(new URL("/login", request.url))
  //   }
  // }

  return NextResponse.next(); // laisse tout passer pour l'instant
}

export const config = {
  matcher: ["/admin/:path*"],
};
