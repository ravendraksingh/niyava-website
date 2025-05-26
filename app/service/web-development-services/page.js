import "../service-common.css";
import FAQ from "@/components/FAQ/FAQ";
import { FAQ_WEB_DEV } from "@/constants/faqConstants";
import "./webdev.css";
import ConnectSection from "@/components/Section/ConnectSection";
import Link from "next/link";

const WebDevelopmentServices = () => {
  return (
    <>
      <section className="gradient_bg mb-5">
        <div className="container py-5 mb-3 dotted_bg">
          <div className="max-w-900 text-center mx-auto">
            <h2 className="display-5 fw-bold">
              Web Development & Design Services
            </h2>
            <p className="fs-5">
              At{" "}
              <Link href="/" className="nt-link-blue">
                Niyava
              </Link>
              , we bring your digital vision to life with cutting-edge web
              development and intuitive design solutions. Whether you need a
              responsive corporate website, a high-performance e-commerce
              platform, or a fully custom web application, our team builds
              scalable, user-centric experiences that boost visibility, engage
              users, and drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto px-3 px-md-0 d-flex flex-column gap-3 justify-content-center align-items-center ">
          <h3 className="display-5 fw-bold text-center max-w-900 mb-3">
            Comprehensive Web Development and Design Services
          </h3>
          <div className="max-w-900">
            <p className="fw-bold">Custom Website Development</p>
            <p className="mb-5">
              We design and develop custom websites that are fast, secure, and
              built to scale. Our solutions are tailored to meet your business
              needs and deliver a seamless user experience.
            </p>
            <hr />
          </div>

          <div className="max-w-900 ">
            <p className="fw-bold">UI/UX Design</p>
            <p className="mb-5">
              Our design philosophy centers around user experience. We create
              intuitive, aesthetically pleasing interfaces that make navigation
              effortless and engaging.
            </p>
            <hr />
          </div>
          <div className="max-w-900 ">
            <p className="fw-bold">E-commerce Solutions</p>
            <p className="mb-5">
              Build your online store with powerful e-commerce platforms like
              Shopify, WooCommerce, or custom solutions. We prioritize smooth
              transactions and easy navigation for optimal customer
              satisfaction.
            </p>
            <hr />
          </div>
          <div className="max-w-900 ">
            <p className="fw-bold">Web Application Development</p>
            <p className="mb-5">
              From dashboards to complex web applications, we develop scalable
              solutions that enhance business productivity and streamline
              operations.
            </p>
            <hr />
          </div>
          <div className="max-w-900 ">
            <p className="fw-bold">CMS Development & Integration</p>
            <p className="mb-5">
              Easily manage your content with powerful CMS solutions like
              WordPress, Drupal, or custom-built platforms. We enable you to
              update and maintain your site effortlessly.
            </p>
            <hr />
          </div>
          <div className="max-w-900 ">
            <p className="fw-bold">API Integration & Development</p>
            <p className="mb-5">
              We seamlessly integrate third-party services and build custom APIs
              to extend the capabilities of your web applications.
            </p>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h3 className="display-5 fw-bold text-center mb-4">Our Approach</h3>
        <div className="max-w-900 mx-auto border">
          <img
            src="/images/webdev-approach.png"
            width="100%"
            alt="Web dev approach image"
          />
        </div>
      </section>
      <section className="container service_container">
        <div className="container max-w-900">
          <h3 className="display-5 fw-bold text-center mb-5">
            Why Choose{" "}
            <Link href="/" className="nt-link">
              Niyava
            </Link>{" "}
            for Web Development & Design?
          </h3>
          <ul className="list-group">
            <li className="list-group-item">
              <p className="fs-5 fw-bold">Tailored Solutions</p>
              <p>
                Custom-built websites designed to reflect your brand and achieve
                your goals.
              </p>
            </li>
            <li className="list-group-item">
              <p className="fs-5 fw-bold">User-Centric Design</p>
              <p>
                Intuitive and engaging interfaces that enhance user experience.
              </p>
            </li>
            <li className="list-group-item">
              <p className="fs-5 fw-bold">Cutting-Edge Technologies</p>
              <p>
                Built with the latest technologies like Next.js, React, and
                Bootstrap for performance and scalability.
              </p>
            </li>
            <li className="list-group-item">
              <p className="fs-5 fw-bold">Responsive & Mobile-First</p>
              <p>
                Optimized for all devices to ensure seamless access anywhere,
                anytime.
              </p>
            </li>
            <li className="list-group-item">
              <p className="fs-5 fw-bold">SEO & Performance Optimized</p>
              <p>
                Designed with search engines and speed in mind for better
                visibility and user retention.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section></section>
      <section className="color2-bg text-white text-center">
        <div className="container max-w-900 px-3 px-md-0 py-5">
          <h3 className="display-5 fw-bold mb-5 mx-auto">
            Empower Your Business with a Powerful Web Presence
          </h3>
          <p className="max-w-1200 mx-auto fs-5 mb-5">
            Your website is more than just a digital presence - it&apos;s a
            platform to connect, engage, and grow. At Niyava, we build websites
            that not only look great but perform exceptionally well. Get in
            Touch with us today to discuss your project and elevate your online
            presence.
          </p>
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
          <FAQ faq={FAQ_WEB_DEV} />
        </div>
      </section>
      <ConnectSection />
    </>
  );
};

export default WebDevelopmentServices;
