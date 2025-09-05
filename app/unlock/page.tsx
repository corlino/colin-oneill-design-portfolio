import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function UnlockPage({ searchParams }: { searchParams?: { error?: string } }) {
    // This server action runs when the form is submitted
    async function unlock(formData: FormData) {
        "use server";
        const input = (formData.get("password") || "").toString();

        // Check if password matches env variable
        if (input !== process.env.SITE_PASSWORD) {
            redirect("/unlock?error=1"); // show error if wrong
        }

        // ✅ Set a session-only cookie (no maxAge, expires when browser closes)
        cookies().set("site-password", input, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/",
        });

        redirect("/"); // go to homepage after unlock
    }

    const isError = searchParams?.error === "1";

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <form
                action={unlock}
                className="w-full max-w-sm space-y-4 p-6 rounded-2xl border border-gray-200 shadow"
            >
                <h1 className="text-xl font-semibold">Enter Password</h1>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-md px-3 py-2"
                    autoFocus
                />
                {isError && <p className="text-sm text-red-600">Wrong password. Try again.</p>}
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
