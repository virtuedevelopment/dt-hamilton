import Image from "next/image";
import { Section } from "@/components/composer";
import InteriorHero from "@/components/site/shell/InteriorHero";
import QuoteCta from "@/components/site/shell/QuoteCta";
import shell from "@/components/site/shell/site.module.css";
import styles from "@/components/site/shell/interior.module.css";
import { aboutContent } from "./content";
import local from "./page.module.css";

export { metadata } from "./content";

export default function AboutPage() {
  const { hero, story, approach, quote } = aboutContent;

  return (
    <Section as="main" id="main" tabIndex={-1}>
      <InteriorHero hero={hero} />
      <Section as="section" className={`${shell.wrap} ${styles.section} ${styles.split}`} aria-labelledby="about-story" data-vc-wireframe-region="story">
        <Section as="div" className={local.storyCopy}>
          <h2 id="about-story" className={styles.heading}>{story.title}</h2>
          {story.paragraphs.map((paragraph) => <p key={paragraph} className={styles.lead}>{paragraph}</p>)}
        </Section>
        <Image src={story.image.src} alt={story.image.alt} width={640} height={510} sizes="(max-width: 640px) 100vw, 560px" className={styles.photo} />
      </Section>
      <Section as="section" className={`${styles.section} ${styles.band}`} aria-labelledby="about-approach" data-vc-wireframe-region="approach">
        <Section as="div" className={shell.wrap}>
          <h2 id="about-approach" className={styles.heading}>{approach.title}</h2>
          <ul className={styles.cardGrid}>
            {approach.items.map(({ title, description }) => (
              <li key={title}><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ul>
        </Section>
      </Section>
      <QuoteCta copy={quote} />
    </Section>
  );
}
