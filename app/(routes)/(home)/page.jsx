import styles from "./home.module.css";
import configurations from "@/_data/config";
import Link from "next/link";
import Navbar from "@/app/components/nav/Navbar";
import Form from "@/app/components/utils/Form";
import ServiceCard from "@/app/components/Cards/ServiceCard";

const images = [
  "https://images.pexels.com/photos/24828656/pexels-photo-24828656/free-photo-of-ballu-air-conditioner-condenser-unit-on-the-wall-of-the-building.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/20046692/pexels-photo-20046692/free-photo-of-air-conditioner-on-outside-wall.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/18352564/pexels-photo-18352564/free-photo-of-ivy-on-house-wall-and-roof-tiles.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/13820151/pexels-photo-13820151.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/11256510/pexels-photo-11256510.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/9599922/pexels-photo-9599922.jpeg?auto=compress&cs=tinysrgb&w=800",
]; //images in form

const faq = [
  {
    question: "What services does DT Hamilton provide?",
    answer:
      "DT Hamilton offers a wide range of services including HVAC installation and repair, residential and commercial services, system maintenance, construction-related HVAC installations, and ductwork design, installation, and repairs.",
  },
  {
    question: "Do you offer both residential and commercial HVAC services?",
    answer:
      "Yes, we specialize in HVAC solutions for both residential homes and commercial buildings. Whether you need a simple repair or a complete system installation, we’ve got you covered.",
  },
  {
    question: "How often should I schedule HVAC maintenance?",
    answer:
      "We recommend scheduling maintenance at least once a year to keep your system running efficiently. Regular maintenance helps prevent breakdowns, ensures optimal performance, and can extend the lifespan of your HVAC system.",
  },
  {
    question: "Do you handle HVAC systems for new construction projects?",
    answer:
      "Yes, DT Hamilton provides HVAC system installations for new construction projects, ensuring proper sizing, efficiency, and system design based on the layout of your building.",
  },
  {
    question: "What kind of ductwork services do you provide?",
    answer:
      "We offer a variety of ductwork services, including installation, repair, cleaning, and sealing. Proper ductwork is essential for distributing air evenly throughout your home or business, improving energy efficiency and comfort.",
  },
  {
    question: "How do I know if my HVAC system needs repair or replacement?",
    answer:
      "If your system is more than 10-15 years old, frequently breaks down, or doesn’t cool or heat effectively, it may be time for a replacement. Our experts can help assess your system and provide recommendations.",
  },
  {
    question: "What are the benefits of regular HVAC maintenance?",
    answer:
      "Regular maintenance ensures your system runs efficiently, prevents costly breakdowns, improves indoor air quality, and can help lower energy bills by keeping your system in peak condition.",
  },
  {
    question: "Do you offer emergency repair services?",
    answer:
      "Yes, DT Hamilton provides 24/7 emergency HVAC repair services for both residential and commercial customers to ensure your system is back up and running as quickly as possible.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve a wide range of areas, offering both residential and commercial services throughout the Ottawa region. Contact us for specific service area details.",
  },
  {
    question: "How can I improve the air quality in my home or business?",
    answer:
      "Proper HVAC maintenance, including regular filter changes and duct cleaning, can significantly improve indoor air quality. We also offer advanced air filtration systems to help eliminate allergens, dust, and pollutants.",
  },
];

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

      <section className={styles.services}>
        <h2>View Our Services</h2>
        <div className={styles.servicebox}>
          {configurations.services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} card={service} />
          ))}
        </div>
        <Link href={"/services"} className="button-black">
          View More
        </Link>
      </section>

      <section className={styles.faq}>
        <h2>Have any questions or concern?</h2>
        <div className={styles.question_box}>
          {faq.map((question, index) => (
            <div key={index} className={styles.answer}>
              <big>{question.question}</big>
              <small>{question.answer}</small>
            </div>
          ))}
        </div>
      </section>

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
