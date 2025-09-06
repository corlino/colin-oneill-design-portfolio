"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function UnlockPage() {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Compare with public env var
        if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
            // ✅ Session cookie (no expiration → clears when browser closes)
            Cookies.set("unlocked", "true")

            router.push("/") // redirect to homepage (or any protected page)
        } else {
            setError("Incorrect password")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-white rounded-xl shadow-md w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold mb-4 text-center">Enter Password</h1>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border p-2 mb-3 w-full rounded"
                />

                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                >
                    Unlock
        </button>
            </form>
        </div>
    )
}
