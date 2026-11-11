import { isPreview, publicPaths, siteUrl } from "@/lib/seo/metadata";

export default function sitemap() {
  return isPreview ? [] : publicPaths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
