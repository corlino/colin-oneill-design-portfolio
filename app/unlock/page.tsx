//"use client";

//import { useEffect, useState } from "react";
//import { useRouter, useSearchParams } from "next/navigation";

//export default function UnlockPage() {
//    const [password, setPassword] = useState("");
//    const [error, setError] = useState("");
//    const router = useRouter();
//    const searchParams = useSearchParams();
//    const next = searchParams?.get("next") || "/";

//    useEffect(() => {
//        // If already unlocked in this tab, go to next
//        if (sessionStorage.getItem("unlocked") === "true") {
//            router.replace(next);
//        }
//    }, [router, next]);

//    async function handleSubmit(e: React.FormEvent) {
//        e.preventDefault();
//        setError("");

//        try {
//            const res = await fetch("/api/unlock", {
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify({ password }),
//            });

//            if (res.ok) {
//                // mark this tab/session as unlocked
//                sessionStorage.setItem("unlocked", "true");
//                // navigate to requested page
//                router.replace(next);
//            } else {
//                setError("Wrong answer, pal...");
//            }
//        } catch (err) {
//            setError("Network or server error");
//        }
//    }

//    return (
//        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
//            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
//                <h2 className="text-xl font-semibold mb-4">Enter password to continue</h2>
//                <input
//                    type="password"
//                    value={password}
//                    onChange={(e) => setPassword(e.target.value)}
//                    placeholder="Password"
//                    className="w-full border p-2 rounded mb-3"
//                    autoFocus
//                />
//                {error && <p className="text-red-600 mb-2">{error}</p>}
//                <button type="submit" className="w-full bg-black text-white py-2 rounded">
//                    Open Sesame!
//        </button>
//            </form>
//        </div>
//    );
//}
