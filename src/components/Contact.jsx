import "./css/contact.css";

const Contact = () => {
  return (
    <div className="contact-set" id="contact">
      <div className="header">
        <h3>Contact Us</h3>
        <small>contact slogan goes here now!</small>
      </div>
      <div className="contact-section row">
        <div className="left-section col-md-4 col-12">
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Your Email *" required />
          <input type="text" placeholder="Your Phone *" required />
        </div>
        <div className="right-section col-md-7 col-12">
          <textarea
            rows="9"
            cols="20"
            placeholder="Your Message *"
            required
          ></textarea>
        </div>
      </div>
      <div className="contact-button">
        <button>SEND MESSAGE</button>
      </div>
    </div>
  );
};

export default Contact;
