import FAQ from "@/components/FAQ/FAQ";
import { FAQ_GENERAL } from "@/constants/faqConstants";

const ThankYouPage = () => {
  return (
    <>
      <section className="container bg-light py-5 d-flex flex-column justify-content-center align-items-center">
        <img
          src="/images/like.png"
          width={76}
          height={76}
          className="mb-3"
          alt="Thank you icon"
        />
        <h2>Thank You!</h2>
        <p>
          Your message has been sent successfully. We will get back to you
          shortly.
        </p>
      </section>
      <section>
        <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
          <p className="text-primary fw-bold">FAQ</p>
          <p className="display-6">Frequently Asked Questions</p>
          <FAQ faq={FAQ_GENERAL} />
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
