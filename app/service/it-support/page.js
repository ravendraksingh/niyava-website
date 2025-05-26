import "../service-common.css";
import FAQ from "@/components/FAQ/FAQ";
import { FAQ_IT_SUPPORT } from "@/constants/faqConstants";
import ConnectSection from "@/components/Section/ConnectSection";
import "./itsupport.css";
import FAQSection from "@/components/FAQ/FAQSection";

const ITSupportServices = () => {
  return (
    <>
      <section className="gradient_bg mb-5">
        <div className="container py-5 mb-3 dotted_bg">
          <div className="max-w-900 text-center mx-auto">
            <h2 className="display-5 fw-bold">IT Support Services</h2>
            <p className="fs-5">
              Focus on growing your business and serving your customers -
              we&apos;ll take care of your IT needs. Rely on us for expert,
              comprehensive service and support tailored to your requirements.
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid p-0 it_support_container">
        {/* <ServiceMenu activeService="it-support" /> */}
        <div className="it_support_1">
          <h3 className="display-6 fw-bold text-center">
            Desktop & Network Support
          </h3>
          <ul className="list-none fs-5 px-3 px-md-5 py-5">
            <li>Hardware and software installation</li>
            <li>Long-term maintenance support </li>
            <li>Network design and maintenance </li>
            <li>Master data management </li>
            <li>On-site support and technical assistance </li>
            <li>Server management</li>
          </ul>
        </div>
        <div className="it_support_2">
          <h3 className="display-6 fw-bold text-center">
            Back-Up & Disaster Recovery
          </h3>
          <p className="fs-5 px-3 px-md-5 py-5">
            Protect your important data and sensitive information with a backup
            and recovery solution from Global Reach. We back up your files
            off-site using a secure encrypted connection. We&apos;ll tailor a
            backup and data recovery procedure to meet your specific needs.
          </p>
        </div>
        <div className="it_support_3">
          <h3 className="display-6 fw-bold text-center">
            Business Network Services
          </h3>
          {/* <p>
              We take the pain out of hardware acquisition and network setup,
              providing feasible and effective solutions. Our full-service IT
              consulting services are built upon decades of experience with
              clients of all sizes and from every type of industry. This
              combined with our team’s expert knowledge of the latest
              technologies offers the most effective services possible. We’ll
              work with you from start to finish to plan and set up your network
              from the ground up, everything executed with friendly, fast
              customer service.
            </p> */}
          <ul className="list-none fs-5 px-3 px-md-5 py-5">
            <li>Hardware and software purchasing</li>
            <li>Network set-up</li>
            <li>Server configuration</li>
            <li>Office 365 consulting</li>
            <li>Storage</li>
            <li>Security software and support</li>
          </ul>
        </div>
      </section>
      <section className="container-fluid bg-secondary p-5 text-center">
        <h3 className="display-5 fw-bold mb-4 text-center text-white">
          Discover the scope of our
        </h3>
        <h3 className="display-5 fw-bold mb-4 text-center text-white">
          IT Support Services
        </h3>
        <a href="/contact" className="btn btn-lg btn-warning">
          Talk to Our Experts
        </a>
      </section>
      <section className="">
        <div
          className={`container section_container d-flex flex-column justify-content-center align-items-center
     flex-lg-row justify-content-lg-between`}
        >
          <div className="">
            <p className="text-primary fw-bold">FAQ</p>
            <p className="display-5">Frequently Asked Questions</p>
          </div>
          <FAQ faq={FAQ_IT_SUPPORT} />
        </div>
      </section>
      <ConnectSection />
    </>
  );
};

export default ITSupportServices;
