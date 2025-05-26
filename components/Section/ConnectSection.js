import ContactUsForm from "../Contact/ContactUsForm";
import FindUs from "../Contact/FindUs";

const ConnectSection = () => {
  return (
    <section name="Contact-Us" className="connect_section">
      <div className="container section_container ">
        <p className="display-5 fw-bold text-center mb-5">Connect with Us</p>
        <div className="d-flex flex-wrap justify-content-evenly">
          <ContactUsForm />
          <FindUs />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
