import { CORE_VALUES } from "@/constants/constants";
import styles from "./aboutus.module.css";
import { METADATA } from "@/constants/constants";
import ConnectSection from "@/components/Section/ConnectSection";

export const metadata = {
  title: "About Niyava Technologies in Noida",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Niyava | ${METADATA.title}`,
  },
};

const AboutUs = () => {
  return (
    <>
      <section className={`${styles.hero_section}`}>
        <div className={`container section_container ${styles.hero_text}`}>
          <p className={`display-1 ${styles.hero_heading}`}>
            Driven by Innovation. Defined by Excellence.
          </p>
          <p className={`h3 px-3 ${styles.para}`}>
            Niyava Technologies was founded with a clear mission: to help
            businesses succeed through technology that works. With a team of
            experienced developers, creative thinkers, and tech enthusiasts, we
            create tailored software that adapts to your evolving needs.
          </p>
          <p className={`h3 px-3 ${styles.para}`}>
            We believe in building long-term partnerships. That&apos;s why we
            listen first, develop second, and deliver always. Whether you need a
            responsive Website, custom CRM, or robust backend our solutions are
            built to scale with your success.
          </p>
        </div>
      </section>

      <section className={`container section_container`}>
        <p className={`display-5 fw-bold`}>Our Vision</p>
        <p className="fs-3">
          “To be a globally trusted technology partner, driving digital
          transformation and innovation for businesses through intelligent,
          sustainable, and impactful software solutions.”
        </p>
      </section>
      <section className="dotted_bg">
        <div className={`container section_container`}>
          <p className="display-5 fw-bold">Core Values</p>
          <div className={`${styles.value_card_container}`}>
            {CORE_VALUES.map((cv) => (
              <div className={styles.value_card} key={cv.id}>
                <div>
                  <img
                    src={`/images/${cv.img}`}
                    width={64}
                    heigh={64}
                    alt={`${cv.title} icon`}
                  />
                </div>
                <div>
                  <p className="fs-3 fw-bold">{cv.title}</p>
                  <p>{cv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ConnectSection />
    </>
  );
};

export default AboutUs;
