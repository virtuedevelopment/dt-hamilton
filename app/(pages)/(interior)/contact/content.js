import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata(
  "/contact",
  "Request an HVAC Quote in Ottawa | DT Hamilton Mechanical",
  "Request a quote for HVAC installation, repair, or maintenance in Ottawa and the surrounding area. Call DT Hamilton Mechanical at 613-293-5790.",
);

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
      limited: "Too many requests. Please wait a few minutes or call 613-293-5790.",
      error: "We couldn’t save your request. Try again or call 613-293-5790.",
    },
  },
  direct: {
    title: "Prefer to talk?",
    description: "Call to discuss your equipment, project, or service area.",
    areaLabel: "Service area",
    area: "Ottawa and surrounding area",
  },
};
