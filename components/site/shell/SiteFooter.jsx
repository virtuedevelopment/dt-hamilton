import Link from "next/link";
import { Section } from "@/components/composer";
import BrandLink from "./BrandLink";
import { siteContent } from "./content";
import styles from "./site.module.css";

export default function SiteFooter() {
  const { footer } = siteContent;

  return (
    <Section as="footer" className={styles.footer} data-vc-wireframe-region="site-footer">
      <Section as="div" className={styles.wrap}>
        <Section as="div" className={styles.footerGrid}>
          <BrandLink />
          <nav aria-label={footer.navigationLabel}>
            <h2>{footer.explore}</h2>
            {footer.navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <address>
            <h2>{footer.contact}</h2>
            <a href={footer.phone.href}>{footer.phone.label}</a>
            <a href={footer.email.href}>{footer.email.label}</a>
            <span>{footer.location}</span>
          </address>
        </Section>
        <p className={styles.footerEnd}>
          {footer.company}
          <Link href={footer.credit.href}>{footer.credit.label}</Link>
        </p>
      </Section>
    </Section>
  );
}
