import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // ✅ Allow unlock page + static files (JS, CSS, images)
    if (
        pathname.startsWith("/unlock") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/favicon") ||
        /\.[a-zA-Z0-9]+$/.test(pathname) // e.g. .png, .svg, .css, .js
    ) {
        return NextResponse.next();
    }

    // ✅ Check cookie (set in Step 3 unlock page)
    const authed = req.cookies.get("site-password")?.value === process.env.SITE_PASSWORD;
    if (authed) return NextResponse.next();

    // 🚫 Not unlocked → redirect to /unlock
    const url = req.nextUrl.clone();
    url.pathname = "/unlock";
    return NextResponse.redirect(url);
}

// ✅ Run middleware on ALL routes
export const config = {
    matcher: "/:path*",
};
