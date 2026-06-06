import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.shreeramadvertising.com",
      lastModified: new Date(),
    },

    {
      url: "https://www.shreeramadvertising.com/services",
      lastModified: new Date(),
    },

    {
      url: "https://www.shreeramadvertising.com/portfolio",
      lastModified: new Date(),
    },
  ];
}