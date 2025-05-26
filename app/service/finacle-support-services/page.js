import "../service-common.css";
import FAQ from "@/components/FAQ/FAQ";
import { FAQ_FINACLE } from "@/constants/faqConstants";
import ConnectSection from "@/components/Section/ConnectSection";
import "./finacle.css";
import { WHYUS_FINACLE } from "@/constants/whyUsConstants";
import WhyChooseUsCarousel from "@/components/Section/WhyChooseUsCarousel";
import Link from "next/link";

const FINACLE_SERVICES = [
  {
    id: 1,
    icon: "puzzle.svg",
    title: "Finacle Customization & Enhancement",
    text: "We adapt Finacle to your business requirements with customized modules, enhanced workflows, and process automation",
  },
  {
    id: 2,
    icon: "arrow-up-circle.svg",
    title: "Finacle Version Upgrades",
    text: "Seamlessly upgrade to the latest versions of Finacle, ensuring compatibility, performance optimization, and security compliance",
  },
  {
    id: 3,
    icon: "share.svg",
    title: "Integration Services",
    text: "Integrate Finacle with third-party applications, payment gateways, CRM, and ERP systems for enhanced functionality",
  },
  {
    id: 4,
    icon: "file-earmark-text.svg",
    title: "Regulatory Compliance & Reporting",
    text: "Ensure your Finacle implementation aligns with local and global banking regulations and reporting standards",
  },
  {
    id: 5,
    icon: "tools.svg",
    title: "Performance Optimization & Troubleshooting",
    text: "Identify performance bottlenecks and apply optimizations to enhance speed and reliability",
  },
  {
    id: 6,
    icon: "chat-dots.svg",
    title: "Support & Maintenance",
    text: "Ongoing technical support to resolve issues, apply patches, and ensure smooth operations",
  },
];

const FINACLE_PROCESS = [
  {
    id: 1,
    title: "Assessment & Planning",
    text: "Understanding your business requirements and Finacle configuration needs",
  },
  {
    id: 2,
    title: "Customization & Development",
    text: "Modifying Finacle modules and features to fit your business",
  },
  {
    id: 3,
    text: "Integration & Testing",
    text: "Seamlessly connecting Finacle to other business applications with rigorous testing",
  },
  {
    id: 4,
    title: "Deployment & Rollout",
    text: "Launching the customized solution with minimal impact on daily operations",
  },
  {
    id: 5,
    title: "Support & Optimization",
    text: "Ongoing maintenance, monitoring, and performance tuning",
  },
];

const FinacleServices = () => {
  return (
    <>
      <section className="gradient_bg">
        <div className="container py-5 mb-3 dotted_bg">
          <div className="max-w-900 text-center mx-auto">
            <h2 className="display-5 fw-bold text-center">
              Finacle Support & Customization
            </h2>
            <p className="fs-5">
              At{" "}
              <Link href="/" className="nt-link-blue">
                Niyava
              </Link>
              , we specialize in Finacle Support & Customization Services,
              enabling financial institutions to optimize their core banking
              operations. Our expertise helps you leverage Finacle&apos;s
              powerful capabilities through seamless customization, efficient
              support, and strategic upgrades, ensuring your banking solutions
              are agile, secure, and future-ready.
            </p>
          </div>
        </div>
      </section>
      <section className="container section_container mb-5">
        <div className="mx-auto d-flex flex-column gap-3 justify-content-center align-items-center ">
          <h3 className="display-5 fw-bold text-center mb-3">
            Our Finacle Services
          </h3>
          <div className="container finacle-card-container">
            {FINACLE_SERVICES.map((item) => (
              <div
                className={`finacle-card rounded`}
                key={`finacle#${item.id}`}
              >
                <p className="fs-5 fw-bold finacle-card-title">{item.title}</p>
                <p className="finacle-card-text m-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient_bg pb-lg-5 mb-5">
        <div className="container dotted_bg">
          <WhyChooseUsCarousel
            data={WHYUS_FINACLE}
            heading="Why Choose Niyava for Finacle?"
          />
        </div>
      </section>
      <section className="mb-5">
        <h3 className="display-5 fw-bold text-center">Our Process</h3>
        <div className="process-box-container">
          {FINACLE_PROCESS.map((item) => (
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
      <hr />

      <section>
        <div
          className={`container section_container d-flex flex-column justify-content-center align-items-center
 flex-lg-row justify-content-lg-between`}
        >
          <div className="">
            <p className="text-primary fw-bold">FAQ</p>
            <p className="display-5">Frequently Asked Questions</p>
          </div>
          <FAQ faq={FAQ_FINACLE} />
        </div>
      </section>
      <ConnectSection />
    </>
  );
};

export default FinacleServices;
