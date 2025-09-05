"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UnlockPage() {
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === PASSWORD) {
            sessionStorage.setItem("unlocked", "true"); // memory-only, resets on tab close
            router.push("/"); // go to homepage
        } else {
            setError(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm space-y-4 p-6 rounded-2xl border border-gray-200 shadow"
            >
                <h1 className="text-xl font-semibold">Enter Password</h1>
                <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Password"
                    className="w-full border rounded-md px-3 py-2"
                    autoFocus
                />
                {error && <p className="text-sm text-red-600">Wrong password. Try again.</p>}
                <button
                    type="submit"
                    className="w-full bg-gray-900 text-white rounded-md py-2 hover:bg-gray-800"
                >
                    Unlock
        </button>
            </form>
        </div>
    );
}
