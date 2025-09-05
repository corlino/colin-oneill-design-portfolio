"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const [unlocked, setUnlocked] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const isUnlocked = sessionStorage.getItem("unlocked") === "true";

        // If not unlocked and not already on /unlock page, redirect
        if (!isUnlocked && pathname !== "/unlock") {
            router.push("/unlock");
        } else {
            setUnlocked(true);
        }
    }, [pathname, router]);

    if (!unlocked) return null; // Hide content until unlocked

    return <>{children}</>;
}
