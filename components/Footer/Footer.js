import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/linkedin";
import styles from "./footer.module.css";

const Footer = () => {
  const size = 32;

  return (
    <footer className={`${styles.footer}`}>
      <div className="container section_container d-flex justify-content-between">
        <div className="d-none d-md-flex flex-column">
          <h4 className="">Quick Links</h4>
          <Link href="/">Home</Link>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/contact-us">Contact Us</a>
        </div>
        <div className="d-flex flex-column">
          <h4 className="">Services</h4>
          <Link href="/service/it-consulting-services">IT Consulting</Link>
          <Link href="/service/web-development-services">
            Web Development & Design
          </Link>
          <Link href="/service/software-development-services">
            Software Development
          </Link>
          <Link href="/service/software-testing-services">
            Software Testing
          </Link>
          <Link href="/service/it-support-services">IT Support</Link>
          <Link href="/service/finacle-support-services">
            Finacle Support & Customization
          </Link>
        </div>
        <div className="d-flex flex-column flex-md-row gap-2 gap-md-4">
          <SocialIcon
            size={size}
            url="https://www.linkedin.com/company/niyava/"
            target="_blank"
          />
          <SocialIcon
            size={size}
            url="https://www.instagram.com/niyavatech/"
            target="_blank"
          />
          <SocialIcon
            size={size}
            url="https://x.com/NiyavaTech"
            target="_blank"
          />
        </div>
      </div>
      <hr />

      <div
        className="container-sm px-md-5 d-flex flex-column flex-md-row justify-content-center 
        align-items-center text-white"
      >
        <div>
          Copyright © 2025.{" "}
          <Link className={styles.copy} href="/">
            <u>Niyava Technologies.</u>
          </Link>
        </div>
        <div>
          <p className="m-0">&nbsp;All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
