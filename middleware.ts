//import { NextResponse } from "next/server"
//import type { NextRequest } from "next/server"

//export function middleware(req: NextRequest) {
//    const unlocked = req.cookies.get("unlocked")?.value === "true"

//    // If the user has not unlocked, redirect to /unlock
//    if (!unlocked && !req.nextUrl.pathname.startsWith("/unlock")) {
//        return NextResponse.redirect(new URL("/unlock", req.url))
//    }

//    return NextResponse.next()
//}

//export const config = {
//    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // protect everything except _next assets
//}
