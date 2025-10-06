import { useEffect, useMemo, useState } from "react";

interface BrandLogoProps {
  className?: string;
  alt?: string;
}

const LOGO_DARK = "/placeholder.svg";
const LOGO_LIGHT = "/placeholder.svg";

export default function BrandLogo({
  className = "h-10 w-auto",
  alt = "Brand logo",
}: BrandLogoProps) {
  const getInitialDark = () =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const [isDark, setIsDark] = useState<boolean>(getInitialDark());

  useEffect(() => {
    const handler = () => setIsDark(getInitialDark());
    window.addEventListener("theme-change", handler as EventListener);
    // Fallback: observe class changes on <html>
    const observer = new MutationObserver(handler);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      window.removeEventListener("theme-change", handler as EventListener);
      observer.disconnect();
    };
  }, []);

  const src = useMemo(() => (isDark ? LOGO_DARK : LOGO_LIGHT), [isDark]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}
