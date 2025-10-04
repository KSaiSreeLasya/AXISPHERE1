import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/services"
  structuredData?: object | object[]; // JSON-LD
}

const SITE_URL = "https://www.axisphere.in";

function upsertMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export default function Seo({ title, description, canonicalPath = "/", structuredData }: SeoProps) {
  useEffect(() => {
    document.title = title;
    upsertMeta("description", description);

    // Basic Open Graph + Twitter cards
    upsertProperty("og:title", title);
    upsertProperty("og:description", description);
    upsertProperty("og:type", "website");
    upsertProperty("og:url", `${SITE_URL}${canonicalPath}`);
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);

    // Canonical
    upsertLink("canonical", `${SITE_URL}${canonicalPath}`);

    // JSON-LD
    const id = "seo-structured-data";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (structuredData) {
      const payload = Array.isArray(structuredData) ? structuredData : [structuredData];
      const json = JSON.stringify(payload.length === 1 ? payload[0] : payload);
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }
      script.text = json;
    } else if (script) {
      script.remove();
    }
  }, [title, description, canonicalPath, structuredData]);

  return null;
}
