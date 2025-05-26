import FAQ from "./FAQ";

const FAQSection = ({ faq }) => {
  return (
    <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
      <p className="text-primary fs-3 fw-bold faq underline">
        <u>FAQs</u>
      </p>
      <p className="display-5 fw-bold mb-4 text-center">
        Frequently Asked Questions
      </p>
      <FAQ faq={faq} />
    </div>
  );
};

export default FAQSection;
