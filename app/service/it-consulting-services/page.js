import { FAQ_IT_SERVICES } from "@/constants/faqConstants";
import "../service-common.css";
import FAQ from "@/components/FAQ/FAQ";
import ConnectSection from "@/components/Section/ConnectSection";
import "./consulting.css";
import Link from "next/link";

const CONSULT_PROCESS = [
  {
    id: 1,
    title: "Assessment",
    text: "Understanding your current IT environment and business objectives",
  },
  {
    id: 2,
    title: "Strategic Planning",
    text: "Developing a customized roadmap tailored to your needs",
  },
  {
    id: 3,
    title: "Implementation",
    text: "Executing the plan with precision and efficiency",
  },
  {
    id: 4,
    title: "Optimization",
    text: "Continuously refining strategies for sustained success",
  },
];

const ITConsultingServices = () => {
  return (
    <>
      <section className="gradient_bg mb-5">
        <div className="container py-5 mb-3 dotted_bg">
          <div className="max-w-900 text-center mx-auto">
            <h2 className="display-5 fw-bold">IT Consulting Services</h2>
            <p className="fs-5">
              At{" "}
              <Link href="/" className="nt-link-blue">
                Niyava
              </Link>
              , we empower businesses to unlock their full potential through
              strategic IT consulting. Our team of experts guides you in
              leveraging technology to optimize operations, enhance
              productivity, and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="mx-auto px-3 px-md-0 d-flex flex-column gap-3 justify-content-center align-items-center">
          <h3 className="display-5 fw-bold text-center max-w-900 mb-3">
            Explore Our Range of IT Consulting Services
          </h3>
          <div className="max-w-900">
            <p className="fw-bold">IT Strategy & Planning</p>
            <p className="mb-5">
              Develop a robust IT roadmap aligned with your business goals. We
              assess your current infrastructure, identify gaps, and recommend a
              strategic plan to enhance efficiency and performance.
            </p>
            <hr />
          </div>
          <div className="max-w-900">
            <p className="fw-bold">Digital Transformation</p>
            <p className="mb-5">
              Modernize your business operations with innovative solutions. Our
              team helps integrate advanced technologies, including cloud
              solutions, AI, and automation, for improved agility and
              competitiveness.
            </p>
            <hr />
          </div>
          <div className="max-w-900">
            <p className="fw-bold">IT Infrastructure Optimization</p>
            <p className="mb-5">
              Streamline your IT environment for better performance and reduced
              costs. We assess your existing infrastructure, optimize resource
              allocation, and implement best practices for stability and
              scalability.
            </p>
            <hr />
          </div>
          <div className="max-w-900">
            <p className="fw-bold">Technology Implementation</p>
            <p className="mb-5">
              Seamlessly introduce new technologies into your business. From
              software upgrades to complex system integrations, we manage the
              entire implementation process with minimal disruption.
            </p>
            <hr />
          </div>
          <div className="max-w-900">
            <p className="fw-bold">IT Risk Management</p>
            <p className="mb-5">
              Mitigate technology-related risks with our proactive approach. We
              conduct risk assessments, implement cybersecurity measures, and
              ensure data protection to safeguard your assets.
            </p>
            <hr />
          </div>
          <div className="max-w-900">
            <p className="fw-bold">Performance Monitoring & Support</p>
            <p className="mb-5">
              Maintain optimal IT performance with continuous monitoring and
              maintenance. Our support team proactively addresses issues to
              minimize downtime and enhance productivity.
            </p>
          </div>
        </div>
      </section>
      <hr />

      <section className="container py-5 mb-5">
        <h3 className="display-5 fw-bold text-center mb-5">Our Approach</h3>
        <div className="process-box-container-consulting">
          {CONSULT_PROCESS.map((item, index) => (
            <div
              className={`process-box-consulting process-box-${item.id}-consulting`}
              key={"yop#d$" + item.id}
            >
              <div className="process-box-id">{`0${item.id}`}</div>
              <div className="process-box-body-consulting">
                <p className="process-box-title">{item.title}</p>
                <p className="process-box-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dark_blue_bg text-white py-5">
        <div className="container py-md-4">
          <h3 className="display-5 fw-bold mb-5 text-center">
            Why Choose{" "}
            <Link href="/" className="nt-link">
              Niyava
            </Link>{" "}
            for IT Consulting?
          </h3>
          <div className="row box_2x2">
            <div className="col-12 col-md-6 border-bottom border-end p-5">
              <p className="fs-4">Expert Guidance</p>
              <p>
                Leverage our vast experience in IT strategy and digital
                transformation
              </p>
            </div>
            <div className="col-12 col-md-6 border-start border-bottom p-5">
              <p className="fs-4">Customized Solutions</p>
              <p>Tailored consulting to meet your unique business challenges</p>
            </div>
            <div className="col-12 col-md-6 border-top border-end p-5">
              <p className="fs-4">Innovation Driven</p>
              <p>
                Stay ahead with cutting-edge technologies and best practices
              </p>
            </div>
            <div className="col-12 col-md-6 border-top border-start p-5">
              <p className="fs-4">End-to-end Support</p>
              <p>From initial assessment to implementation and beyond</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container section_container d-flex flex-column justify-content-center align-items-center
        flex-lg-row justify-content-lg-between"
        >
          <div className="">
            <p className="text-primary fw-bold">FAQ</p>
            <p className="display-5">Frequently Asked Questions</p>
          </div>
          <FAQ faq={FAQ_IT_SERVICES} />
        </div>
      </section>
      <ConnectSection />
    </>
  );
};

export default ITConsultingServices;
