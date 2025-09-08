"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // If not unlocked, redirect to /unlock (with a next param)
  useEffect(() => {
    const isUnlocked = sessionStorage.getItem("unlocked") === "true";
    if (!isUnlocked && pathname !== "/unlock") {
      const next = encodeURIComponent(pathname || "/");
      router.replace(`/unlock?next=${next}`);
      return;
    }
    setUnlocked(true);
  }, [pathname, router]);

  // When unlocked, ensure sessionStorage cleared on close/refresh
  useEffect(() => {
    if (!unlocked) return;
    const handler = () => {
      try {
        sessionStorage.removeItem("unlocked");
      } catch (e) {
        // ignore
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [unlocked]);

  // Hide children until we confirm unlocked
  if (!unlocked) return null;

  return <>{children}</>;
}
