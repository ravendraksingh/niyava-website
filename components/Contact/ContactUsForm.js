"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./contactform.module.css";

const ContactUsForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        action="/send-mail.php"
        method="POST"
        className={`w-100 bg-light p-4 mb-4 rounded shadow ${styles.contact_form}`}
        // onSubmit={handleSubmit}
      >
        <h3 className="text-center">Business Enquiry</h3>
        <div className="form-group mb-3">
          <label htmlFor="inputName">Your Name</label>
          <span>*</span>
          <input
            type="text"
            className="form-control"
            name="name"
            id="inputName"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="inputEmail">Email ID</label>
          <span>*</span>
          <input
            type="email"
            className="form-control"
            name="email"
            id="inputEmail"
            placeholder="Enter your email id"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputMobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            id="inputMobile"
            placeholder="Enter your mobile number"
            value={formData.mobile || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputMessage">Message</label>
          <span>*</span>
          <textarea
            className="form-control"
            name="message"
            id="inputMessage"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Your Enquiry
        </button>
      </form>
    </>
  );
};

export default ContactUsForm;
