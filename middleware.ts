import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow unlock page and static files
    if (
        pathname.startsWith("/unlock") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/favicon") ||
        /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    // Check session cookie
    const authed = req.cookies.get("site-password")?.value === process.env.SITE_PASSWORD;
    if (authed) return NextResponse.next();

    // Redirect to /unlock
    const url = req.nextUrl.clone();
    url.pathname = "/unlock";
    return NextResponse.redirect(url);
}

// Apply middleware to all routes
export const config = {
    matcher: "/:path*",
};
