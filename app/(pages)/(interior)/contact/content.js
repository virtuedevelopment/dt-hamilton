import seo from "@/lib/seo/metadata";

export const metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  keywords: seo.contact.keywords,
  authors: [{ name: seo.contact.author }],
};

export const contactContent = {
  hero: {
    title: "Contact DT Hamilton",
    description: "Tell us about your HVAC needs, request a quote, or call to discuss your project.",
    image: "/images/contact-page-photo.webp",
    action: { label: "Open the quote form", href: "#quote-form" },
  },
  form: {
    title: "Request a quote",
    description: "Share your location, equipment, and the work you need help with.",
    feedback: {
      submit: "Send quote request",
      pending: "Sending your request…",
      success: "Your quote request was received. Our team will be in touch.",
      invalid: "Check your name, phone number, email address, and service, then try again.",
      error: "We couldn’t send your request. Try again or call 613-293-5790.",
    },
  },
  direct: {
    title: "Prefer to talk?",
    description: "Call to discuss your equipment, project, or service area.",
    areaLabel: "Service area",
    area: "Ottawa and surrounding area",
  },
};
