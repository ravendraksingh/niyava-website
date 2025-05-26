import ContactUsForm from "@/components/Contact/ContactUsForm";
import FindUs from "@/components/Contact/FindUs";
import FAQSection from "@/components/FAQ/FAQSection";
import AllServices from "@/components/Service/AllServices";
import { FAQ_GENERAL } from "@/constants/faqConstants";
import styles from "./serviceshome.module.css";

const ServicesHome = () => {
  return (
    <>
      <section>
        <img
          src="/images/services-hero.png"
          alt="service page hero image"
          width="100%"
          className="border-bottom mb-5"
        />
      </section>
      <section className="container max-w-1200 mb-5">
        <p className="display-5 fw-bold px-sm-0 text-center">Our Services</p>
        <p className="mx-auto fs-4 my-4">
          We help businesses embrace digital transformation by delivering
          cutting-edge technology solutions, expert strategic consulting, and
          end-to-end execution. Our focus is on driving innovation, efficiency,
          and growth through seamless and scalable services.
        </p>
      </section>

      <section
        className={`${styles.service_section} py-5 px-3 px-md-5 mb-3 mb-md-5`}
      >
        <AllServices theme="dark" />
      </section>

      <section className="dotted_bg py-5">
        <p className="display-5 fw-bold text-center mb-5">Connect with Us</p>
        <div
          className="container service_container d-flex flex-column flex-md-row 
        justify-content-evenly align-iterm-center"
        >
          <ContactUsForm />
          <FindUs />
        </div>
      </section>
      <section>
        <FAQSection faq={FAQ_GENERAL} />
      </section>
    </>
  );
};

export default ServicesHome;
