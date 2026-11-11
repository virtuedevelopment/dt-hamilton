import { ButtonLink, Section } from "@/components/composer";
import { siteContent } from "./content";
import shell from "./site.module.css";
import styles from "./interior.module.css";

export default function QuoteCta({ copy }) {
  const { phone } = siteContent.header;

  return (
    <Section as="section" className={`${shell.wrap} ${styles.section}`} aria-labelledby="quote-title" data-vc-wireframe-region="quote">
      <Section as="div" className={styles.cta}>
        <Section as="div">
          <h2 id="quote-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </Section>
        <Section as="div" className={styles.ctaActions}>
          <ButtonLink className={`${shell.button} ${shell.red}`} href={siteContent.header.menu.quote.href}>
            {siteContent.header.menu.quote.label}
          </ButtonLink>
          <a className={`${shell.button} ${shell.outline}`} href={phone.href}>{phone.label}</a>
        </Section>
      </Section>
    </Section>
  );
}
