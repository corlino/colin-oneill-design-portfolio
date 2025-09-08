"use client"

import { useState } from "react"

export default function UnlockPage() {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
            // Redirect into the site
            window.location.href = "/"
        } else {
            setError("Incorrect password")
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4"
            >
                <h1 className="text-xl font-bold">Enter Password</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded p-2"
                    placeholder="Password"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="bg-black text-white rounded p-2 hover:bg-gray-800"
                >
                    Unlock
        </button>
            </form>
        </div>
    )
}
