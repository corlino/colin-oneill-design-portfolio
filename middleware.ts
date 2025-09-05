import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    // Allow access to the unlock page or static files
    if (url.pathname === "/unlock" || url.pathname.startsWith("/_next/") || url.pathname.startsWith("/favicon.ico")) {
        return NextResponse.next();
    }

    // Check for unlocked flag in sessionStorage (cannot access directly from middleware)
    // Instead, we use a cookie fallback if desired
    const unlocked = req.cookies.get("unlocked")?.value === "true";

    if (!unlocked) {
        url.pathname = "/unlock";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
