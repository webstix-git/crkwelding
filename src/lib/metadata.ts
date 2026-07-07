import type { Metadata } from "next";
import { canonicalUrl } from "./site";

export function withCanonical(pathname: string, metadata: Metadata): Metadata {
  const canonical = canonicalUrl(pathname);

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical,
    },
    openGraph: {
      ...metadata.openGraph,
      url: canonical,
    },
  };
}
