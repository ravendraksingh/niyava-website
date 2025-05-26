"use client";
import Image from "next/image";
import "./header.css";
import Link from "next/link";

const Header = () => {
  const closeSidebar = () => {
    const element = document.querySelector("#offcanvasSidebar");
    if (element) {
      element.hid();
    }
  };

  return (
    <header className="border-bottom">
      <nav className="container py-1 d-flex flex-row justify-content-between align-items-center">
        <Link href="/" className="navbar-brand">
          <Image
            src="/images/logo2.png"
            width={100}
            height={100}
            alt="Niyava Logo Image"
            className="rounded"
          />{" "}
          <span className="fs-3 fw-bold mx-3">NIYAVA</span>
        </Link>
        <div className="d-none d-lg-flex flex-grow-1 flex-md-row justify-content-md-center align-items-md-center">
          <div className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </div>

          {/* Services Dropdown */}
          <div className="nav-item dropdown dropdown-hover">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Services
            </a>
            <div className="dropdown-menu">
              <Link
                className="dropdown-item"
                href="/service/it-consulting-services"
              >
                <i className="bi bi-briefcase-fill text-primary me-2"></i>
                IT Consulting Services
              </Link>

              <Link
                className="dropdown-item"
                href="/service/web-development-services"
              >
                <i className="bi bi-globe text-primary me-2"></i>
                Web Development & Design Services
              </Link>

              <Link
                className="dropdown-item"
                href="/service/software-development-services"
              >
                <i className="bi bi-code-slash text-primary me-2"></i>
                Software Development Services
              </Link>

              <Link
                className="dropdown-item"
                href="/service/software-testing-services"
              >
                <i className="bi bi-check-circle text-primary me-2"></i>
                Software Testing Services
              </Link>

              <Link className="dropdown-item" href="/service/it-support">
                <i className="bi bi-tools text-primary me-2"></i>IT Support
                Services
              </Link>

              <Link
                className="dropdown-item"
                href="/service/finacle-support-services"
              >
                <i className="bi bi-bank text-primary me-2"></i>
                Finacle Support & Customization Services
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" href="/careers">
              Careers
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" href="/contact-us">
              Contact-Us
            </Link>
          </div>
        </div>
        <div className="d-lg-none">
          <a
            className="btn btn-light ms-2"
            data-bs-toggle="offcanvas"
            href="#offcanvasSidebar"
            role="button"
            aria-controls="offcanvasSidebar"
            onClick={closeSidebar}
          >
            <svg
              height={32}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </a>
        </div>
      </nav>
      {/** Sidebar */}
      <div
        className="sidebar offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSidebar"
        data-bs-backdrop="false"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header border-bottom">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-none">
            <li className="list-item-primary">
              <Link
                href="/"
                onClick={closeSidebar}
                className="sidebar-link-primary"
              >
                Home
              </Link>
            </li>
            <li className="list-item-custom list-item-primary">
              <Link
                href="/about"
                onClick={closeSidebar}
                className="sidebar-link-primary"
              >
                About
              </Link>
            </li>
            <li className="list-item-primary">
              <Link
                href="/services"
                onClick={closeSidebar}
                className="sidebar-link-primary"
              >
                Services
              </Link>
            </li>
            <ul className="list-none">
              <li className="list-item-secondary">
                <Link
                  href="/service/it-consulting-services"
                  onClick={closeSidebar}
                  className="sidebar-link-primary"
                >
                  IT Consulting
                </Link>
              </li>
              <li className="list-item-secondary">
                <Link
                  href="/service/web-development-services"
                  onClick={closeSidebar}
                  className="sidebar-link-primary"
                >
                  Web Development & Design
                </Link>
              </li>
              <li className="list-item-secondary">
                <Link
                  href="/service/software-development-services"
                  onClick={closeSidebar}
                  className="sidebar-link-primary"
                >
                  Software Developement
                </Link>
              </li>
              <li className="list-item-secondary">
                <Link
                  href="/service/software-testing-services"
                  onClick={closeSidebar}
                  className="sidebar-link-primary"
                >
                  Software Testing
                </Link>
              </li>
              <li className="list-item-secondary">
                <Link
                  href="/service/it-support"
                  onClick={closeSidebar}
                  className="sidebar-link-primary"
                >
                  IT Support
                </Link>
              </li>
              <li className="list-item-secondary">
                <Link
                  href="/service/finacle-support-services"
                  onClick={closeSidebar}
                  className="sidebar-link-primary"
                >
                  Finacle Support & Customization
                </Link>
              </li>
            </ul>
            <li className="list-item-primary">
              <Link
                href="/careers"
                onClick={closeSidebar}
                className="sidebar-link-primary"
              >
                Careers
              </Link>
            </li>
            <li className="list-item-primary">
              <Link
                href="/contact-us"
                onClick={closeSidebar}
                className="sidebar-link-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
