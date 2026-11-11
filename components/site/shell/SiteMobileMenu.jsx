"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Drawer } from "@/components/composer";
import { Menu } from "@/components/composer/icons";
import styles from "./site.module.css";

export default function SiteMobileMenu({ header, pathname }) {
  const [open, setOpen] = useState(false);
  const { menu, navigation, navigationLabel, phone } = header;

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    function closeOnDesktop(event) {
      if (event.matches) setOpen(false);
    }
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Drawer
      className={styles.mobileDrawer}
      title={menu.title}
      description={menu.description}
      side="right"
      open={open}
      onOpenChange={setOpen}
      closeLabel={menu.closeLabel}
      trigger={
        <Button className={styles.menuButton} aria-label={menu.openLabel}>
          <Menu size={24} aria-hidden="true" />
        </Button>
      }
    >
      <nav className={styles.drawerNavigation} aria-label={navigationLabel}>
        {navigation.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onNavigate={() => setOpen(false)}>
            {label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
        <Link className={styles.drawerQuote} href={menu.quote.href} onNavigate={() => setOpen(false)}>
          {menu.quote.label}
        </Link>
        <a href={phone.href}>{phone.label}</a>
      </nav>
    </Drawer>
  );
}
