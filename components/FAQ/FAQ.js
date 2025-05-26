import React from "react";
import "./faq.css";

const FAQ = ({ faq }) => {
  const FAQ_LIST = faq;
  return (
    <div
      className="accordion accordion-flush w-100 max-w-720"
      id="accordionFAQ"
    >
      {FAQ_LIST.map((f) => (
        <div className="accordion-item" key={`key_${f.id}`}>
          <p className="accordion-header" id={`heading-${f.id}`}>
            <button
              className={`accordion-button fw-semibold ${
                f.id === "services" ? "" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${f.id}`}
              aria-expanded="true"
              aria-controls={`collapse-${f.id}`}
            >
              {f.title}
            </button>
          </p>
          <div
            id={`collapse-${f.id}`}
            className={`accordion-collapse collapse ${
              f.id === "services" ? "show" : ""
            }`}
            aria-labelledby={`heading-${f.id}`}
            data-bs-parent="#accordionFAQ"
          >
            <div className="accordion-body">
              {typeof f.description === "string" ? (
                <p>{f.description}</p>
              ) : (
                f.description
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
