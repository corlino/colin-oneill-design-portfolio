import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { password } = await req.json();
        if (!process.env.SITE_PASSWORD) {
            return NextResponse.json({ ok: false, error: "Server password not configured" }, { status: 500 });
        }
        if (password === process.env.SITE_PASSWORD) {
            return NextResponse.json({ ok: true });
        }
        return NextResponse.json({ ok: false }, { status: 401 });
    } catch (err) {
        return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
    }
}
