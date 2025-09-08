"use client"

import { useState } from "react"

export default function UnlockPage() {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch("/", {
            headers: { "x-password": password },
        })

        if (res.ok) {
            // If password is correct, go to homepage
            window.location.href = "/"
        } else {
            setError("Incorrect password")
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border px-4 py-2 rounded"
                />
                <button type="submit" className="bg-black text-white px-4 py-2 rounded">
                    Unlock
        </button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    )
}
