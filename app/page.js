import FAQSection from "@/components/FAQ/FAQSection";
import ConnectSection from "@/components/Section/ConnectSection";
import WhyChooseUsCarousel from "@/components/Section/WhyChooseUsCarousel";
import AllServices from "@/components/Service/AllServices";
import { FAQ_GENERAL } from "@/constants/faqConstants";
import { WHYUS_GENERAL } from "@/constants/whyUsConstants";
import styles from "./home.module.css";

/**
 * Homepage typically flows like this:
 * Hero → Services → Why Us → Testimonials → FAQ → Contact
 */
export default function Home() {
  return (
    <div>
      <section>
        <img
          src="/images/home-hero-1920x1080.png"
          width="100%"
          alt="Home page hero image"
          className="border-bottom"
        />
      </section>
      <section className="container section_container max-w-1200">
        <h2 className="display-5 fw-bold text-center">
          Innovative IT Solutions to Empower Your Business
        </h2>
        <p className="mx-auto fs-4 my-4">
          At Niyava, we help businesses thrive in the digital age through
          cutting-edge IT consulting, custom software development, CRM
          implementation, and technology outsourcing. Whether you&apos;re a
          growing enterprise or an established organization, our expert team
          delivers scalable, secure, and tailor-made solutions that accelerate
          your digital transformation.
        </p>
        <p className="mx-auto fs-4 my-4">
          From optimizing operations to building future-ready platforms, we
          combine strategy, innovation, and deep tech expertise to turn your
          business challenges into opportunities. Let&apos;s build what&apos;s
          next - together.
        </p>
      </section>

      <section
        className={`container-fluid section_container dark_blue_bg ${styles.services}`}
      >
        <h3 className="display-5 fw-bold text-white text-center pb-md-3">
          Our Services
        </h3>
        <AllServices theme="dark" className="pb-lg-5" />
      </section>

      <section className="gradient_bg pb-lg-5">
        <div className="container dotted_bg">
          <WhyChooseUsCarousel
            data={WHYUS_GENERAL}
            heading="Why choose Niyava?"
          />
        </div>
      </section>

      <section className={`${styles.faq_section}`}>
        <FAQSection faq={FAQ_GENERAL} />
      </section>
      <ConnectSection />
    </div>
  );
}
