import localFont from "next/font/local";
import { isPreview, siteName, siteUrl } from "@/lib/seo/metadata";
import "@/styles/composer.css";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: "Heating, cooling, and ventilation services in Ottawa.",
  ...(isPreview && { robots: { index: false, follow: false } }),
};

const googleSans = localFont({
  src: "./fonts/google-sans-latin.woff2",
  weight: "400 700",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body className={googleSans.className}>
        {children}
      </body>
    </html>
  );
}
