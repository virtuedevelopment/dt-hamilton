import Image from "next/image";
import { ButtonLink, Section } from "@/components/composer";
import shell from "./site.module.css";
import styles from "./interior.module.css";

export default function InteriorHero({ hero }) {
  return (
    <Section as="section" className={styles.hero} aria-labelledby="page-title" data-vc-wireframe-region="hero">
      <Image src={hero.image} alt="" fill sizes="100vw" preload className={styles.heroImage} />
      <Section as="div" className={`${shell.wrap} ${styles.heroCopy}`}>
        <h1 id="page-title">{hero.title}</h1>
        <p>{hero.description}</p>
        {hero.action && (
          <ButtonLink className={`${shell.button} ${shell.red}`} href={hero.action.href}>
            {hero.action.label}
          </ButtonLink>
        )}
      </Section>
    </Section>
  );
}
