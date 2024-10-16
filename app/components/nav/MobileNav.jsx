"use client";
import styles from "./nav.module.css";
import React, { useState } from "react";
import configurations from "@/_data/config";
import Link from "next/link";
import { SquareMenu, Minimize2 } from "lucide-react";

export default function MobileNav() {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <button onClick={toggleMenu} className={styles.mobile_button}>
        <SquareMenu />
      </button>

      <aside
        className={
          menuToggle ? styles.mobile_menu_open : styles.mobile_menu_closed
        }
      >
        <button onClick={toggleMenu} className={styles.mobile_menu_button}>
          <Minimize2 />
        </button>

        <ul className={styles.mobile_options}>
          {configurations.routes.mainRoutes.map((route) => (
            <li onClick={toggleMenu} key={route.url}>
              <Link href={route.url}>{route.route}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
