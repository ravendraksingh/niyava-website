import ConnectSection from "@/components/Section/ConnectSection";
import WhyChooseUsCarousel from "@/components/Section/WhyChooseUsCarousel";
import { WHYUS_SOFTDEV } from "@/constants/whyUsConstants";
import Link from "next/link";
import "../service-common.css";
import "./softdev-services.css";

const SOFT_SER = [
  {
    id: 1,
    title: "Web Application Development",
    desc: "Develop secure and high-performing web applications that deliver seamless user experiences and scalability",
    img: "bi-globe2",
  },
  {
    id: 2,
    title: "Mobile Application Development",
    desc: "Build engaging mobile applications for Android and iOS with intuitive designs and rich functionality",
    img: "bi-phone",
  },
  {
    id: 3,
    title: "Enterprise Software Solutions",
    desc: "Streamline your business operations with scalable enterprise software, including ERP and CRM solutions",
    img: "bi-database-gear",
  },
  {
    id: 4,
    title: "API Development & Integration",
    desc: "Enhance your applications with third-party integrations and custom APIs for seamless communication",
    img: "bi-share",
  },

  {
    id: 5,
    title: "Maintenance & Support",
    desc: "We provide ongoing maintenance and technical support to keep your software up-to-date and fully optimized",
    img: "bi-tools",
  },
];

const SOFTDEV_PROCESS = [
  {
    id: 1,
    title: "Discovery & Planning",
    text: "Understanding your business goals and defining project requirements",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    text: "Crafting user-friendly designs and wireframes for visualization",
  },
  {
    id: 3,
    title: "Development & Testing",
    text: "Building high-performance software with thorough testing",
  },
  {
    id: 4,
    title: "Integration",
    text: "Seamless deployment and integration with your existing systems.",
  },
  {
    id: 5,
    title: "Maintenance & Scaling",
    text: "Continuous support and scalability improvements as your business grows",
  },
];

const SoftwareDevServices = () => {
  return (
    <>
      <section className="gradient_bg mb-5">
        <div className="container py-5 mb-3 dotted_bg">
          <div className="max-w-900 text-center mx-auto">
            <h1 className="display-5 fw-bold">Software Development Services</h1>
            <p className="fs-5">
              At{" "}
              <Link href="/" className="nt-link-blue">
                Niyava
              </Link>
              , we build powerful, scalable, and innovative software solutions
              that drive business growth and operational efficiency. From
              concept to deployment, our team delivers custom software
              development tailored to your unique business requirements.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container pb-5">
          <h3 className="mx-auto max-w-900 display-5 fw-bold text-center mb-5">
            What we bring to your software development journey
          </h3>
          <div
            className="softdev_card_container"
          >
            {SOFT_SER.map((item) => (
              <div className="card" key={"sgsd$2k3" + item.id}>
                <div className="card-body">
                  <i
                    className={`icon bi ${item.img} text-warning text-center`}
                  ></i>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient_bg pb-lg-5 mb-5">
        <div className="container dotted_bg">
          <WhyChooseUsCarousel
            data={WHYUS_SOFTDEV}
            heading="Why Choose Niyava for Software Development?"
          />
        </div>
      </section>

      <section className="mb-5">
        <h3 className="display-5 fw-bold text-center">Our Process</h3>
        <div className="process-box-container">
          {SOFTDEV_PROCESS.map((item) => (
            <div
              className={`process-box process-box-${item.id}`}
              key={"jks3ad$" + item.id}
            >
              <div className="process-box-id">{`0${item.id}`}</div>
              <div className="process-box-body">
                <p className="process-box-title">{item.title}</p>
                <p className="process-box-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ConnectSection />
    </>
  );
};

export default SoftwareDevServices;
