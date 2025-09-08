import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // Allow unlock page and static files
    if (pathname.startsWith("/unlock") || pathname.startsWith("/_next") || pathname === "/favicon.ico") {
        return NextResponse.next()
    }

    // Check for session cookie
    const hasCookie = req.cookies.get("session")?.value

    if (!hasCookie) {
        const url = req.nextUrl.clone()
        url.pathname = "/unlock"
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
