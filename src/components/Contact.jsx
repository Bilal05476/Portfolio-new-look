import "./css/contact.css";

const Contact = () => {
  return (
    <div className="contact-set" id="contact">
      <div className="header">
        <h3>Contact Me & Subscribe</h3>
        <small>contact slogan goes here now!</small>
      </div>
      <div className="row">
        <form className="contact-section col-md-8 col-12">
          <div className="row">
            <div className="left-section col-md-4 col-12">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="text" placeholder="Your Phone *" required />
            </div>
            <div className="right-section col-md-7 col-12">
              <textarea
                rows="9"
                // cols="20"
                placeholder="Your Message *"
                required
              ></textarea>
            </div>
            {/* <br /> */}
            <div className="contact-button mx-auto">
              <button>SEND MESSAGE</button>
            </div>
          </div>
        </form>
        <div className="col-md-4 subscribe">
          <form>
            <input type="email" placeholder="Your Email *" required />
            <div className="contact-button">
              <button>SUBSCRIBE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
