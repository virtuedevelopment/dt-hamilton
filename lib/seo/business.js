import { siteContent } from "@/components/site/shell/content";
import { siteName, siteUrl } from "./metadata";

export const business = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${siteUrl}/#business`,
  name: siteName,
  legalName: siteContent.footer.company,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/logo-color.svg`,
  telephone: siteContent.footer.phone.href.replace("tel:", ""),
  email: siteContent.footer.email.label,
  areaServed: { "@type": "City", name: "Ottawa" },
};
