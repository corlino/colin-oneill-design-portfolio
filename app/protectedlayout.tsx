"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const [unlocked, setUnlocked] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Check if the session is unlocked
        const isUnlocked = sessionStorage.getItem("unlocked") === "true";

        // If not unlocked and not already on /unlock page, redirect there
        if (!isUnlocked && pathname !== "/unlock") {
            router.push("/unlock");
        } else {
            setUnlocked(true);
        }
    }, [pathname, router]);

    // Hide content until unlocked
    if (!unlocked) return null;

    return <>{children}</>;
}
