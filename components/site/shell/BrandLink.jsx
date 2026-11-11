import Image from "next/image";
import Link from "next/link";
import { siteContent } from "./content";
import styles from "./site.module.css";

export default function BrandLink() {
  const { brand } = siteContent;

  return (
    <Link href="/" aria-label={brand.homeLabel} className={styles.brand}>
      <Image src={brand.logo} alt="" width={42} height={30} />
      <span>{brand.name}<strong>{brand.descriptor}</strong></span>
    </Link>
  );
}
