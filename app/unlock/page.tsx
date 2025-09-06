"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function UnlockPage() {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
            // ✅ Set a session cookie (clears when browser/tab closes)
            document.cookie = "unlocked=true; path=/; samesite=strict"

            // Redirect to homepage after unlock
            router.push("/")
        } else {
            setError("Incorrect password")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-6"
            >
                <h1 className="text-2xl font-semibold text-center text-gray-900">
                    Enter Password
        </h1>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Unlock
        </button>
            </form>
        </div>
    )
}
