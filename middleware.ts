import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
    const unlocked = req.cookies.get("unlocked")

    // If user has no session cookie and is not already on /unlock → redirect
    if (!unlocked && !req.nextUrl.pathname.startsWith("/unlock")) {
        return NextResponse.redirect(new URL("/unlock", req.url))
    }

    return NextResponse.next()
}

export const config = {
    // Protect everything except Next.js internals and /unlock
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
