import { isPreview, siteUrl } from "@/lib/seo/metadata";

export default function robots() {
  if (isPreview) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
