const phone = { label: "613-293-5790", href: "tel:+16132935790" };
const email = { label: "service@dt-hamilton.ca", href: "mailto:service@dt-hamilton.ca" };

export const siteContent = {
  brand: {
    name: "DT Hamilton",
    descriptor: "Mechanical",
    logo: "/assets/logo-white.svg",
    homeLabel: "DT Hamilton Mechanical, home",
  },
  header: {
    navigation: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    navigationLabel: "Main navigation",
    phone: { ...phone, label: "Call 613-293-5790" },
    skipLabel: "Skip to content",
    menu: {
      title: "Menu",
      description: "Explore DT Hamilton Mechanical.",
      openLabel: "Open menu",
      closeLabel: "Close menu",
      quote: { label: "Get a quote", href: "/contact#quote-form" },
    },
  },
  footer: {
    explore: "Explore",
    navigationLabel: "Footer navigation",
    navigation: [
      { label: "About DT Hamilton", href: "/about" },
      { label: "All services", href: "/services" },
      { label: "Common questions", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
    contact: "Contact",
    phone,
    email,
    location: "Ottawa, Ontario",
    company: "DT Hamilton Mechanical (Ottawa) Inc.",
    credit: { label: "Powered by Virtue", href: "https://www.virtuesoftware.ca/" },
  },
};
