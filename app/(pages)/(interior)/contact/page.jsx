import { Section } from "@/components/composer";
import QuoteForm from "@/components/site/contact/QuoteForm";
import InteriorHero from "@/components/site/shell/InteriorHero";
import { siteContent } from "@/components/site/shell/content";
import shell from "@/components/site/shell/site.module.css";
import styles from "@/components/site/shell/interior.module.css";
import { contactContent } from "./content";
import local from "./page.module.css";

export { metadata } from "./content";

export default function ContactPage() {
  const { hero, form, direct } = contactContent;
  const { email, phone } = siteContent.footer;

  return (
    <Section as="main" id="main" tabIndex={-1}>
      <InteriorHero hero={hero} />
      <Section as="div" className={`${shell.wrap} ${styles.section} ${local.layout}`}>
        <Section as="section" id="quote-form" tabIndex={-1} className={local.contactForm} aria-labelledby="quote-title" data-vc-wireframe-region="quote-form">
          <h2 id="quote-title" className={styles.heading}>{form.title}</h2>
          <p className={styles.lead}>{form.description}</p>
          <QuoteForm feedback={form.feedback} />
        </Section>
        <Section as="aside" className={local.direct} aria-labelledby="direct-title" data-vc-wireframe-region="direct-contact">
          <h2 id="direct-title">{direct.title}</h2>
          <p>{direct.description}</p>
          <address>
            <a className={`${shell.button} ${shell.white}`} href={phone.href}>{phone.label}</a>
            <a href={email.href}>{email.label}</a>
          </address>
          <h3>{direct.areaLabel}</h3>
          <p>{direct.area}</p>
        </Section>
      </Section>
    </Section>
  );
}
