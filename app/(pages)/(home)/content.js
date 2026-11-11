import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata(
  "/",
  "Ottawa HVAC Services | DT Hamilton Mechanical",
  "Heating, cooling, and ventilation for Ottawa homes, businesses, and construction projects. Explore DT Hamilton Mechanical’s services or request a quote.",
);

const phone = { label: "613-293-5790", href: "tel:+16132935790" };
// Existing site photography is representative. Confirm imagery before launch.
export const homeContent = {
  hero: {
    title: "Heating, cooling, and ventilation in Ottawa.",
    description: "HVAC installation, repair, and maintenance for homes, businesses, and construction projects.",
    image: { src: "/images/contact-page-photo.webp", alt: "" },
    primaryAction: { label: "Get a quote", href: "/contact#quote-form" },
    secondaryAction: { label: "See our services", href: "/services" },
  },
  shortcuts: {
    label: "Service shortcuts",
    links: [
      { label: "Heating & cooling", href: "#heating" },
      { label: "Ventilation & ductwork", href: "#ventilation" },
      { label: "Maintenance", href: "#maintenance" },
      { label: "Commercial HVAC", href: "#commercial" },
      { label: "New construction", href: "#construction" },
    ],
  },
  about: {
    title: "Comfort at home. Reliable systems at work.",
    description: "DT Hamilton Mechanical works on heating, cooling, and ventilation systems across the Ottawa area. We help with everything from a repair visit to planning HVAC for a new build.",
    images: [
      { src: "/images/about-img-02.jpeg", alt: "Technician working on an outdoor HVAC unit" },
      { src: "/images/hero-img.jpg", alt: "Living space with wall-mounted air conditioning" },
    ],
  },
  work: {
    title: "The work we do",
    description: "Explore the kinds of systems and spaces we service, from home equipment to commercial mechanical systems.",
    items: [
      { label: "Residential HVAC", href: "#heating", image: "/images/hero-img.jpg" },
      { label: "Commercial HVAC", href: "#commercial", image: "/images/contact-page-photo.webp" },
      { label: "Service and maintenance", href: "#maintenance", image: "/images/about-img-02.jpeg" },
      { label: "Construction and ventilation", href: "#construction", image: "/images/info-form.jpeg" },
    ],
  },
  services: {
    title: "HVAC services for your property",
    items: [
      { id: "heating", title: "Heating & cooling", description: "Installation and repair for furnaces, air conditioning, and heat pumps." },
      { id: "ventilation", title: "Ventilation & ductwork", description: "Duct installation, sealing, and repair for homes and commercial buildings." },
      { id: "maintenance", title: "Maintenance", description: "Routine service for heating, cooling, and ventilation equipment." },
      { id: "commercial", title: "Commercial HVAC", description: "Service for rooftop units, air handlers, and other building systems." },
      { id: "construction", title: "New construction", description: "HVAC system design and installation based on your project requirements." },
      { id: "air-quality", title: "Indoor air quality", description: "Options for filtration, ventilation, and humidity control." },
    ],
  },
  faq: {
    title: "Common questions",
    description: "What to know before reaching out.",
    items: [
      { id: "homes-and-businesses", title: "Do you work with homes and businesses?", content: "Yes. We provide HVAC services for residential and commercial properties." },
      { id: "new-construction", title: "Can you help with new construction?", content: "Yes. We design and install HVAC systems for new construction projects." },
      { id: "ductwork", title: "Do you install and repair ductwork?", content: "Yes. We offer ductwork installation, repair, and sealing." },
      { id: "service-area", title: "Do you serve my location?", content: "We serve the Ottawa area. Contact us with your address to confirm coverage." },
    ],
  },
  quote: {
    title: "Tell us what you need.",
    description: "Share your location, equipment, and the work you need help with.",
    action: { label: "Open the quote form", href: "/contact#quote-form" },
    image: "/images/about-img-02.jpeg",
    call: {
      title: "Prefer to call?",
      description: "Talk to us about the service or project you have in mind.",
      action: phone,
    },
  },
};
