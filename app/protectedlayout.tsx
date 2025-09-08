"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image"
import { ArrowRight, ArrowDown, ExternalLink } from "lucide-react";

interface Props {
    children: ReactNode;
}

export default function protectedlayout({ children }: Props) {
    const [unlocked, setUnlocked] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState("");

    const SITE_PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || process.env.SITE_PASSWORD;

    useEffect(() => {
        if (typeof window !== "undefined") {
            const unlockedSession = sessionStorage.getItem("unlocked");
            if (unlockedSession === "true") {
                setUnlocked(true);
            }
        }
    }, []);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === SITE_PASSWORD) {
            sessionStorage.setItem("unlocked", "true");
            setUnlocked(true);
            setError("");
        } else {
            setError("Wrong answer, pal...");
        }
    };

    if (unlocked) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <form
                onSubmit={handleUnlock}
                className="bg-white p-10 rounded-xl shadow-lg max-w-sm w-full text-center"
            >
                {/* Logo centered */}
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                    <Image
                        src="/Logo.png?height=128&width=128"
                        alt="Logo"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                    />
                </div>

                <h2 className="text-2xl text-[#47C7F0] font-bold mb-6">
                    Enter The Secret Password
    </h2>

                <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 w-full mt-4"
                >
                    Open Sesame!
                    <ArrowRight className="ml-2 h-4 w-4" />
    </button>








            </form>
        </div>

    );
}
