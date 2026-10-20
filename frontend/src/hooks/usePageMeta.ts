import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const upsertMeta = (
  attribute: "name" | "property",
  key: string,
  content: string
): { element: HTMLMetaElement; previous: string | null; created: boolean } => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  const created = !element;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  const previous = element.getAttribute("content");
  element.setAttribute("content", content);

  return { element, previous, created };
};

export const usePageMeta = ({
  title,
  description,
  canonical,
  jsonLd,
}: PageMetaOptions) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionMeta = upsertMeta("name", "description", description);
    const ogTitle = upsertMeta("property", "og:title", title);
    const ogDescription = upsertMeta("property", "og:description", description);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    const canonicalCreated = !canonicalLink;
    const previousCanonical = canonicalLink?.getAttribute("href") ?? null;

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", canonical);

    let jsonLdScript: HTMLScriptElement | null = null;

    if (jsonLd) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.type = "application/ld+json";
      jsonLdScript.id = "blockchain-service-jsonld";
      jsonLdScript.text = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      document.title = previousTitle;

      if (descriptionMeta.previous === null) {
        descriptionMeta.element.remove();
      } else {
        descriptionMeta.element.setAttribute(
          "content",
          descriptionMeta.previous
        );
      }

      if (ogTitle.previous === null) {
        ogTitle.element.remove();
      } else {
        ogTitle.element.setAttribute("content", ogTitle.previous);
      }

      if (ogDescription.previous === null) {
        ogDescription.element.remove();
      } else {
        ogDescription.element.setAttribute(
          "content",
          ogDescription.previous
        );
      }

      if (canonicalCreated) {
        canonicalLink?.remove();
      } else if (previousCanonical !== null && canonicalLink) {
        canonicalLink.setAttribute("href", previousCanonical);
      }

      jsonLdScript?.remove();
    };
  }, [title, description, canonical, jsonLd]);
};
