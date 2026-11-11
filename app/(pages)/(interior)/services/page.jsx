import { Section } from "@/components/composer";
import InteriorHero from "@/components/site/shell/InteriorHero";
import QuoteCta from "@/components/site/shell/QuoteCta";
import shell from "@/components/site/shell/site.module.css";
import styles from "@/components/site/shell/interior.module.css";
import { servicesContent } from "./content";
import local from "./page.module.css";

export { metadata } from "./content";

export default function ServicesPage() {
  const { hero, catalogue, quote } = servicesContent;

  return (
    <Section as="main" id="main" tabIndex={-1}>
      <InteriorHero hero={hero} />
      <Section as="section" className={`${styles.section} ${styles.band} ${local.catalogue}`} id="service-catalogue" tabIndex={-1} aria-labelledby="catalogue-title" data-vc-wireframe-region="catalogue">
        <Section as="div" className={shell.wrap}>
          <h2 id="catalogue-title" className={styles.heading}>{catalogue.title}</h2>
          <p className={styles.lead}>{catalogue.description}</p>
          <ul className={styles.cardGrid}>
            {catalogue.items.map(({ title, description }) => (
              <li key={title}><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ul>
        </Section>
      </Section>
      <QuoteCta copy={quote} />
    </Section>
  );
}
