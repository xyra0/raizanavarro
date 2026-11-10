import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cmw8nvu",   // Replace with your EmailJS Service ID
        "template_5u29z87",  // Replace with your EmailJS Template ID
        form.current,
        "myrW4_KNFZwHX9i5Z"    // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatusMessage("Failed to send: " + error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-title">
        <h1>Welcome to Contacts Page</h1>
      </div>

      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="from_name" required placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="from_email" required placeholder="Your Email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="4" required placeholder="Your Message" />
          </div>

          <button type="submit" disabled={loading} className="send-btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>

      <div className="contact-social">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <a href="#" aria-label="GitHub"><FaGithub/></a>
          <a href="#" aria-label="X"><FaXTwitter/></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin/></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;