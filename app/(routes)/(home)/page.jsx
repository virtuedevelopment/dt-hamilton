import styles from "./home.module.css";
import Link from "next/link";
import Navbar from "@/app/components/nav/Navbar";
import Form from "@/app/components/utils/Form";

const images = [
  "https://images.pexels.com/photos/24828656/pexels-photo-24828656/free-photo-of-ballu-air-conditioner-condenser-unit-on-the-wall-of-the-building.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/20046692/pexels-photo-20046692/free-photo-of-air-conditioner-on-outside-wall.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/18352564/pexels-photo-18352564/free-photo-of-ivy-on-house-wall-and-roof-tiles.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/13820151/pexels-photo-13820151.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/11256510/pexels-photo-11256510.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/9599922/pexels-photo-9599922.jpeg?auto=compress&cs=tinysrgb&w=800",
]; //images in form

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
        <section className={styles.header_section}>
          <span className={styles.title}>
            <img src="/assets/logo-white.svg" alt="logo" />
            <h3>DT HAMILTION MECHANICAL (OTTAWA) INC.</h3>
          </span>
          <h1>
            Heating, Cooling, and Ventilation. <br /> We&apos;ve got you
            covered.
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
      <section className={styles.quote_form}>
        <div className={styles.info_section}>
          <h3>
            Please fill out this form so we can provide the services you need.
          </h3>
          <p>
            We offer a multitude of services for both residential and business
            alike.
          </p>

          <div className={styles.image_box}>
            {images.map((img, index) => (
              <img key={index} src={img} />
            ))}
          </div>
        </div>
        <div className={styles.form_box}>
          <h2>Get a Quote Now.</h2>
          <Form />
        </div>
      </section>
    </>
  );
}
