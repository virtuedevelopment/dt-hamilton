import site from "@/lib/config/site";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata(
  "/services",
  "Heating, Cooling & Ventilation Services in Ottawa | DT Hamilton",
  "Explore HVAC installation, repair, maintenance, and ductwork for Ottawa homes and commercial buildings, including new construction.",
);

export const servicesContent = {
  hero: {
    title: "HVAC services",
    description: "Installation, repair, and maintenance for homes, businesses, and construction projects in the Ottawa area.",
    image: "/images/info-form.jpeg",
    action: { label: "Browse services", href: "#service-catalogue" },
  },
  catalogue: {
    title: "Find the service you need",
    description: "From routine maintenance to a new system installation, explore the work we do.",
    items: site.services.map(({ service_name, service_desc }) => ({
      title: service_name,
      description: service_desc,
    })),
  },
  quote: {
    title: "Need help choosing a service?",
    description: "Tell us what is happening with your equipment or what you are planning for your building.",
  },
};
