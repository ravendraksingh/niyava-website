import FAQSection from "@/components/FAQ/FAQSection";
import ConnectSection from "@/components/Section/ConnectSection";
import { FAQ_GENERAL } from "@/constants/faqConstants";

const ContactUsPage = () => {
  return (
    <div className="container section_container">
      <ConnectSection />
      <section>
        <FAQSection faq={FAQ_GENERAL} />
      </section>
    </div>
  );
};

export default ContactUsPage;
