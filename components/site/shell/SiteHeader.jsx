"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "@/components/composer";
import BrandLink from "./BrandLink";
import SiteMobileMenu from "./SiteMobileMenu";
import { siteContent } from "./content";
import styles from "./site.module.css";

export default function SiteHeader({ overlay }) {
  const pathname = usePathname();
  const { header } = siteContent;

  return (
    <Section as="header" className={styles.siteHeader} data-overlay={overlay} data-vc-wireframe-region="site-navigation">
      <a className={styles.skip} href="#main">{header.skipLabel}</a>
      <Section as="div" className={`${styles.wrap} ${styles.navRow}`}>
        <BrandLink />
        <nav className={styles.desktopNav} aria-label={header.navigationLabel}>
          {header.navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
        <a className={`${styles.button} ${styles.outline} ${styles.desktopPhone}`} href={header.phone.href}>{header.phone.label}</a>
        <SiteMobileMenu key={pathname} header={header} pathname={pathname} />
      </Section>
    </Section>
  );
}
