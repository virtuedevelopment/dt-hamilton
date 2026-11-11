import { business } from "@/lib/seo/business";
import Image from "next/image";
import Link from "next/link";
import { Accordion, ButtonLink, Section } from "@/components/composer";
import SiteShell from "@/components/site/shell/SiteShell";
import shell from "@/components/site/shell/site.module.css";
import HomeMotion from "./HomeMotion";
import { homeContent } from "./content";
import styles from "./page.module.css";

export { metadata } from "./content";

export default function HomePage() {
  const { hero, shortcuts, about, work, services, faq, quote } = homeContent;

  return (
    <SiteShell overlay>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }} />
      <Section as="main" className={styles.wireframe} id="main" tabIndex={-1}>
        <HomeMotion />
        <Section as="section" className={styles.hero} aria-labelledby="home-title" data-vc-wireframe-region="hero">
          <Image className={styles.heroPhoto} src={hero.image.src} alt={hero.image.alt} fill sizes="100vw" preload />
          <Section as="div" className={`${shell.wrap} ${styles.heroContent}`}>
            <h1 id="home-title">{hero.title}</h1>
            <p>{hero.description}</p>
            <Section as="div" layout="flex" wrap gap="small" className={styles.actions}>
              <ButtonLink className={`${shell.button} ${shell.red}`} href={hero.primaryAction.href}>{hero.primaryAction.label}</ButtonLink>
              <ButtonLink className={`${shell.button} ${shell.outline}`} href={hero.secondaryAction.href}>{hero.secondaryAction.label}</ButtonLink>
            </Section>
          </Section>
        </Section>

        <Section as="nav" className={styles.serviceRibbon} aria-label={shortcuts.label} data-vc-wireframe-region="service-shortcuts">
          <Section as="div" className={styles.ribbonInner}>
            {shortcuts.links.map(({ href, label }) => (
              <Link key={href} href={href}><span aria-hidden="true">✦</span>{label}</Link>
            ))}
          </Section>
        </Section>

        <Section as="section" className={`${shell.wrap} ${styles.about}`} id="about" tabIndex={-1} data-home-reveal="" aria-labelledby="about-title" data-vc-wireframe-region="about">
          <Section as="div" className={styles.aboutCopy}>
            <h2 id="about-title">{about.title}</h2>
            <p>{about.description}</p>
          </Section>
          {about.images.map(({ src, alt }, index) => (
            <Image key={src} src={src} alt={alt} width={300} height={300} className={index === 0 ? styles.aboutLeft : styles.aboutRight} />
          ))}
        </Section>

        <Section as="section" className={`${shell.wrap} ${styles.section}`} id="work" tabIndex={-1} data-home-reveal="" aria-labelledby="work-title" data-vc-wireframe-region="work">
          <Section as="div" className={styles.sectionHead}>
            <h2 id="work-title">{work.title}</h2>
            <p>{work.description}</p>
          </Section>
          <ul className={styles.workGrid}>
            {work.items.map(({ label, href, image }) => (
              <li key={label}>
                <Link href={href} className={styles.workTile}>
                  <Image src={image} alt="" fill sizes="(max-width: 760px) 50vw, 540px" />
                  <span>{label}<b aria-hidden="true">↗</b></span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section as="section" className={`${styles.services} ${styles.section}`} id="services" tabIndex={-1} data-home-reveal="" aria-labelledby="services-title" data-vc-wireframe-region="services">
          <Section as="div" className={shell.wrap}>
            <h2 id="services-title">{services.title}</h2>
            <ul className={styles.serviceGrid}>
              {services.items.map(({ id, title, description }) => (
                <li key={id} id={id} tabIndex={-1}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </Section>
        </Section>

        <Section as="section" className={`${shell.wrap} ${styles.faq} ${styles.section}`} id="faq" tabIndex={-1} data-home-reveal="" aria-labelledby="faq-title" data-vc-wireframe-region="faq">
          <Section as="div">
            <h2 id="faq-title">{faq.title}</h2>
            <p>{faq.description}</p>
          </Section>
          <Accordion items={faq.items} className={styles.questions} />
        </Section>

        <Section as="section" className={`${shell.wrap} ${styles.quote}`} id="quote-section" tabIndex={-1} data-home-reveal="" aria-labelledby="quote-title" data-vc-wireframe-region="quote">
          <Section as="div" className={styles.quoteMain}>
            <Image className={styles.quotePhoto} src={quote.image} alt="" fill sizes="(max-width: 640px) 100vw, 700px" />
            <h2 id="quote-title">{quote.title}</h2>
            <p>{quote.description}</p>
            <ButtonLink className={`${shell.button} ${shell.red}`} href={quote.action.href}>{quote.action.label}</ButtonLink>
          </Section>
          <Section as="div" className={styles.quotePhone}>
            <h3>{quote.call.title}</h3>
            <p>{quote.call.description}</p>
            <a className={`${shell.button} ${shell.white}`} href={quote.call.action.href}>{quote.call.action.label}</a>
          </Section>
        </Section>
      </Section>

    </SiteShell>
  );
}
