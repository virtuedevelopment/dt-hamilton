import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import configurations from "@/_data/config";
import styles from "./nav.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <img src="/assets/logo-white.svg" alt="logo" />
      </Link>
      <ul className={styles.main_menu}>
        {configurations.routes.mainRoutes.map((route) => (
          <li key={route.url}>
            <Link href={route.url}>{route.route}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/"} className={`${styles.get_quote} button-main`}>
        Get a quote
      </Link>
      <MobileNav />
    </nav>
  );
}
