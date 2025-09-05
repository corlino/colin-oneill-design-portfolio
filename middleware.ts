import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    // Allow /unlock and static files
    if (
        url.pathname === "/unlock" ||
        url.pathname.startsWith("/_next/") ||
        url.pathname.startsWith("/favicon.ico")
    ) {
        return NextResponse.next();
    }

    // Check if the unlocked cookie exists
    const unlocked = req.cookies.get("unlocked")?.value === "true";

    if (!unlocked) {
        url.pathname = "/unlock";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
