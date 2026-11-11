import seo from "@/lib/seo/metadata";

export const metadata = {
  title: seo.about.title,
  description: seo.about.description,
  keywords: seo.about.keywords,
  authors: [{ name: seo.about.author }],
};

export const aboutContent = {
  hero: {
    title: "About DT Hamilton Mechanical",
    description: "Heating, cooling, and ventilation for homes and businesses across the Ottawa area.",
    image: "/images/about-header.jpg",
    action: { label: "Explore our services", href: "/services" },
  },
  story: {
    title: "Comfort at home. Reliable systems at work.",
    paragraphs: [
      "DT Hamilton Mechanical installs, repairs, and maintains HVAC systems for residential and commercial properties. We also help plan and install systems for new construction.",
      "The right approach depends on the building, the equipment, and what you need it to do. Tell us what you are working with and we can discuss the next step.",
    ],
    image: { src: "/images/about-img-02.jpeg", alt: "Technician working on outdoor HVAC equipment" },
  },
  approach: {
    title: "How we can help",
    items: [
      { title: "Homes", description: "Heating, cooling, and ventilation for day-to-day comfort, from equipment repairs to a new installation." },
      { title: "Commercial properties", description: "Installation and maintenance for rooftop units, air handlers, and other mechanical systems." },
      { title: "Construction", description: "HVAC and ductwork design and installation tailored to the building and project requirements." },
    ],
  },
  quote: {
    title: "Let’s talk about your property.",
    description: "Share your location, equipment, and the work you need help with.",
  },
};
