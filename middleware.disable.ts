//import { NextResponse } from "next/server"
//import type { NextRequest } from "next/server"

//export function middleware(req: NextRequest) {
//  // Always force unlock except on /unlock
//  if (!req.nextUrl.pathname.startsWith("/unlock")) {
//    return NextResponse.redirect(new URL("/unlock", req.url))
//  }

//  return NextResponse.next()
//}

//export const config = {
//  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
//}
