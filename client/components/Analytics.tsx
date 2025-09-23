import { useEffect } from "react";

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.async = true;
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.head.appendChild(s);
  });
}

export default function Analytics() {
  useEffect(() => {
    const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
    if (!id) return;

    // Respect Do Not Track
    const dnt = (navigator as any).doNotTrack === "1" || (window as any).doNotTrack === "1";
    if (dnt) return;

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`)
      .then(() => {
        gtag("js", new Date());
        gtag("config", id, { anonymize_ip: true, page_path: location.pathname });
      })
      .catch(() => {
        // ignore
      });
  }, []);

  return null;
}
