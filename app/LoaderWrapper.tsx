"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "./components/LoadingSpinner";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

  // Loader أول مرة الموقع يفتح
  useEffect(() => {
    const timeout = setTimeout(() => setInitialLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  // Loader أثناء التنقل بين الصفحات (ماعدا Home)
  useEffect(() => {
    if (!initialLoading && pathname !== "/") {
      setRouteLoading(true);
      const t = setTimeout(() => setRouteLoading(false), 1000);
      return () => clearTimeout(t);
    }
  }, [pathname, initialLoading]);

  if (initialLoading) return <LoadingSpinner />;

  if (routeLoading) return <LoadingSpinner />;

  return <>{children}</>;
}
