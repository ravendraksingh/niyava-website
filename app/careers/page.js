import ContactUsForm from "@/components/Contact/ContactUsForm";
import FindUs from "@/components/Contact/FindUs";
import ConnectSection from "@/components/Section/ConnectSection";
import { WORK_WITH_US } from "@/constants/constants";
import styles from "./careers.module.css";

const Careers = () => {
  return (
    <>
      <section name="Hero-Section">
        <img
          className={styles.careers_img}
          src="/images/job2.png"
          width="100%"
          alt="Careers Page Image"
        />
      </section>
      <section>
        <div className="px-3 px-md-0 py-5 max-w-1200 mx-auto text-center">
          {/* <p className={`display-2 ${styles.hero_heading}`}>
            Build Your Future With Us
          </p> */}
          <p className={`${styles.para} mb-5`}>
            At Niyava, we are more than just developers, designers, and
            strategists - we are creators, collaborators, and problem-solvers.
            If you&apos;re passionate about technology, innovation, and making
            an impact, you&apos;ll fit right in.
          </p>
          <p className={`${styles.para}`}>
            We&apos;re growing fast and always on the lookout for curious minds
            and fresh perspectives. Whether you&apos;re an experienced
            professional or just getting started, there&apos;s a place for you
            here.
          </p>
        </div>
      </section>

      <section className="container section_container gradient_bg mb-5">
        <p className={`display-5`}>🌟 Why Join Us?</p>
        <div className={styles.job_card_container}>
          {WORK_WITH_US.map((cv) => (
            <div className={styles.job_card} key={cv.id}>
              <p className="fs-4 fw-bold">{cv.title}</p>
              <p className="text-wrap">{cv.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container section_container pt-0">
        <p className="display-5">🚀 Current Openings</p>
        <div className={styles.careers_link}>
          <a href="https://niyava.springrecruit.com/" target="_blank">
            Click here to view and apply.
          </a>
        </div>

        <p>
          Don&apos;t see a role that fits? We&apos;d still love to hear from
          you! Send us your resume at{" "}
          <a href="mailto:hr@niyava.com">
            <u>
              <strong>hr@niyava.com</strong>
            </u>
          </a>
          .
        </p>
      </section>
      <ConnectSection />
    </>
  );
};

export default Careers;
