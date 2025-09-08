import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
    // Allow unlock page and static assets
    if (
        req.nextUrl.pathname.startsWith("/unlock") ||
        req.nextUrl.pathname.startsWith("/_next") ||
        req.nextUrl.pathname.startsWith("/favicon.ico")
    ) {
        return NextResponse.next()
    }

    // Check password header
    const password = req.headers.get("x-password")

    if (password === process.env.SITE_PASSWORD) {
        return NextResponse.next()
    }

    // Otherwise redirect to unlock
    return NextResponse.redirect(new URL("/unlock", req.url))
}

export const config = {
    matcher: ["/((?!_next|.*\\..*).*)"], // Protect all pages except assets
}
