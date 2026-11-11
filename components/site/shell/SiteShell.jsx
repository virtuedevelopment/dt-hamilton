import { Section } from "@/components/composer";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import styles from "./site.module.css";

export default function SiteShell({ children, overlay = false }) {
  return (
    <Section as="div" className={styles.shell}>
      <SiteHeader overlay={overlay} />
      {children}
      <SiteFooter />
    </Section>
  );
}
