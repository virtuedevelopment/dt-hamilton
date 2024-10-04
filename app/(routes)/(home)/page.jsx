import styles from "./home.module.css";
import Link from "next/link";
import Navbar from "@/app/components/nav/Navbar";

export default function Home() {
  return (
    <header className={styles.header}>
      <Navbar />
      <section className={styles.header_section}>
        <span className={styles.title}>
          <img src="/assets/logo-white.svg" alt="logo" />
          <h3>DT HAMILTION MECHANICAL (OTTAWA) INC.</h3>
        </span>
        <h1>
          Heating, Cooling, and Ventilation. <br /> We've got you covered.
        </h1>
        <div className={styles.button_box}>
          <Link href={"/"} className="button-white">
            View our Services
          </Link>

          <Link href={"/"} className="button-black">
            Get in Touch
          </Link>
        </div>
      </section>
    </header>
  );
}
