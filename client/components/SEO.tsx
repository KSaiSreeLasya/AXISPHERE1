import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function setOrCreateMeta(selector: string, attrs: Record<string, string>) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    const tag = selector.startsWith('meta') ? 'meta' : 'link';
    el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el!);
  } else {
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

export function CanonicalAndOgUpdater() {
  const { pathname } = useLocation();

  useEffect(() => {
    const origin = window.location.origin;
    const canonicalHref = origin + pathname;

    // Canonical
    setOrCreateMeta("link#canonical", { id: "canonical", rel: "canonical", href: canonicalHref });

    // OG url
    setOrCreateMeta("meta#og-url", { id: "og-url", property: "og:url", content: canonicalHref });

    // Absolute social images
    const absImage = origin + "/placeholder.svg";
    setOrCreateMeta("meta#og-image", { id: "og-image", property: "og:image", content: absImage });
    setOrCreateMeta("meta#twitter-image", { id: "twitter-image", name: "twitter:image", content: absImage });
  }, [pathname]);

  return null;
}

export function JsonLd() {
  useEffect(() => {
    const origin = window.location.origin;

    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Axisphere Worx LLP",
      url: origin,
      logo: origin + "/placeholder.svg",
    };

    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Axisphere",
      url: origin,
      potentialAction: {
        "@type": "SearchAction",
        target: origin + "/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };

    const ensureJson = (id: string, data: object) => {
      let node = document.getElementById(id) as HTMLScriptElement | null;
      if (!node) {
        node = document.createElement("script");
        node.type = "application/ld+json";
        node.id = id;
        document.head.appendChild(node);
      }
      node.textContent = JSON.stringify(data);
    };

    ensureJson("ld-org", org);
    ensureJson("ld-website", website);
  }, []);

  return null;
}

export default function SEO() {
  return null;
}
