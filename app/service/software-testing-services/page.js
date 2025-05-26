import ContactUsForm from "@/components/Contact/ContactUsForm";
import FindUs from "@/components/Contact/FindUs";
import ContactUs from "@/components/CTA/ContactUs";
import FAQ from "@/components/FAQ/FAQ";
import ConnectSection from "@/components/Section/ConnectSection";
import { FAQ_TESTING } from "@/constants/faqConstants";
import "../service-common.css";
import "./services-testing.css";

const SoftwareTestingServices = () => {
  return (
    <>
      <section className="gradient_bg mb-5">
        <div className="container py-5 mb-3 dotted_bg">
          <div className="max-w-900 text-center mx-auto">
            <h2 className="display-5 fw-bold">Software Testing Services</h2>
            <p className="fs-5">
              We understand that software quality is crucial to your business
              success. Our Software Testing Services ensure your applications
              are reliable, secure, and high-performing. By using
              industry-leading testing methodologies and tools, we identify
              vulnerabilities, enhance performance, and deliver smooth,
              consistent user experiences.
            </p>
          </div>
        </div>
      </section>
      <section className="container mb-5">
        <h3 className="display-5 fw-bold text-center mb-5">
          What We Offer in Software Testing
        </h3>
        {/* <img src="/testing-services.png" width="100%" alt="Testing services image"/> */}
        <div className="testing-card-container">
          <div className="testing-card">
            <p className="testing-card-title gradient-1">Functional Testing</p>
            <p className="testing-card-desc">
              Ensure your software operates according to specifications and
              meets business requirements with our comprehensive functional
              testing
            </p>
          </div>
          <div className="testing-card">
            <p className="testing-card-title gradient-1">Performance Testing</p>
            <p className="testing-card-desc">
              We evaluate your application&apos;s speed, responsiveness, and
              stability under various conditions to guarantee optimal
              performance
            </p>
          </div>
          <div className="testing-card">
            <p className="testing-card-title gradient-1">Security Testing</p>
            <p className="testing-card-desc">
              Protect your application from vulnerabilities with in-depth
              security assessments, penetration testing, and compliance checks
            </p>
          </div>
          <div className="testing-card">
            <p className="testing-card-title gradient-1">Usability Testing</p>
            <p className="testing-card-desc">
              Deliver seamless user experiences by identifying and resolving
              usability issues that impact end-user satisfaction
            </p>
          </div>
          <div className="testing-card">
            <p className="testing-card-title gradient-1">
              Compatibility Testing
            </p>
            <p className="testing-card-desc">
              Ensure your application functions flawlessly across different
              browsers, operating systems, and devices
            </p>
          </div>
          <div className="testing-card">
            <p className="testing-card-title gradient-1">Automation Testing</p>
            <p className="testing-card-desc">
              Accelerate testing cycles and enhance accuracy with robust
              automation frameworks tailored to your application
            </p>
          </div>
        </div>
      </section>
      <section className="gradient_bg mb-5">
        <div className="dotted_bg px-md-5">
          <h3 className="display-5 fw-bold py-5 text-center">Our Process</h3>
          <div className="row gap-5 gap-lg-0 pb-5">
            <div className="col-12 col-lg-6">
              <img
                src="/images/testing-cycle.png"
                width="100%"
                alt="Testing cycle image"
                className="rounded"
              />
            </div>
            <ol className="col-12 col-lg-6 px-5">
              <li>
                <p className="fw-bold fs-5">Requirement Analysis</p>
                <p>Understanding application goals and testing objectives</p>
              </li>
              <li>
                <p className="fw-bold fs-5">Planning</p>
                <p>
                  Developing a customized testing strategy and defining scope.
                </p>
              </li>
              <li>
                <p className="fw-bold fs-5">Test Execution</p>
                <p>Performing rigorous tests across multiple environments.</p>
              </li>
              <li>
                <p className="fw-bold fs-5">Defect Reporting:</p>
                <p>
                  Identifying issues with detailed documentation and
                  recommendations.
                </p>
              </li>
              <li>
                <p className="fw-bold fs-5"> Optimization & Maintenance</p>
                <p>
                  Ensuring long-term application reliability with continuous
                  monitoring.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div
          className={`container section_container d-flex flex-column justify-content-center align-items-center
   flex-lg-row justify-content-lg-between`}
        >
          <div className="">
            <p className="text-primary fw-bold">FAQ</p>
            <p className="display-5">Frequently Asked Questions</p>
          </div>
          <FAQ faq={FAQ_TESTING} />
        </div>
      </section>
      <ConnectSection />
    </>
  );
};

export default SoftwareTestingServices;
