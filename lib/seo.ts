import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

export const indexableRobots: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export function absoluteUrl(path = "/") {
  if (!siteConfig.url) {
    return undefined;
  }

  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${base}${normalizedPath}`;
}

export function ogImages() {
  const url = absoluteUrl("/images/og-cover.jpg");

  if (!url) {
    return undefined;
  }

  return [
    {
      url,
      width: 1200,
      height: 630,
      alt: "Lozartico · Reformas y construcción en Valencia y Gran Canaria",
    },
  ];
}

export function canonical(path: string) {
  return siteConfig.url ? { canonical: path } : undefined;
}
