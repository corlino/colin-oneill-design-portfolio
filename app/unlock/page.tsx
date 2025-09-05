"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UnlockPage() {
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || "giantjamsandwich";
    // This is just for local dev. In Vercel, replace NEXT_PUBLIC_SITE_PASSWORD with a real value if needed.

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (passwordInput === PASSWORD) {
            // Set a cookie that middleware will read
            document.cookie = "unlocked=true; path=/; samesite=strict";
            router.push("/"); // redirect to homepage
        } else {
            setError(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm space-y-4 p-6 rounded-2xl border border-gray-200 shadow bg-white"
            >
                <h1 className="text-xl font-semibold text-gray-900">Enter Password</h1>
                <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Password"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    autoFocus
                />
                {error && <p className="text-sm text-red-600">Incorrect password. Try again.</p>}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition-colors"
                >
                    Unlock
        </button>
            </form>
        </div>
    );
}
