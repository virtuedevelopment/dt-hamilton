export const siteUrl = "https://www.dt-hamilton.ca";
export const siteName = "DT Hamilton Mechanical";
export const publicPaths = ["/", "/about", "/services", "/contact"];
export const isPreview = process.env.VERCEL_ENV === "preview";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DT Hamilton Mechanical — Heating, cooling, and ventilation in Ottawa",
};

export function pageMetadata(path, title, description) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_CA",
      siteName,
      url: path,
      title,
      description,
      images: [socialImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}
