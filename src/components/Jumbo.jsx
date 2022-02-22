import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./css/jumbotron.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Jumbo = () => {
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-jumbotron" id="top">
      <Helmet>
        <title>Bilal Ahmed | Portfolio</title>
      </Helmet>
      <p
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="welcome"
      >
        Welcome To My Portfolio!
      </p>
      <strong
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="slogan"
      >
        Provide Digital Solution for your Business
      </strong>
      <p
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="description"
      >
        A Freelance<span> JavaScript Website Developer</span>.
      </p>
      <a
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2500"
        href="#contact"
      >
        <button className="jumbo-button">Contact Now</button>
      </a>
      <div className="social-icons-section mt-md-4">
        <a
          className="social-link"
          target="blank"
          href="https://github.com/Bilal05476"
        >
          <BsGithub className="font-icon" title="GitHub" />
        </a>
        <a
          className="social-link"
          target="blank"
          href="https://www.instagram.com/bilal_ahmed_05/"
        >
          <BsInstagram className="font-icon" title="Instagram" />
        </a>
        <a
          className="social-link"
          target="blank"
          href="https://www.linkedin.com/in/bilal-ahmed-b75125184"
        >
          <BsLinkedin className="font-icon" title="LinkedIn" />
        </a>
        <a
          className="social-link"
          target="blank"
          href="https://www.facebook.com/profile.php?id=100007545697355"
        >
          <BsFacebook className="font-icon" title="Facebook" />
        </a>
        <a
          className="social-link"
          target="blank"
          href="mailto:bilalahmed6551@gmail.com"
        >
          <MdEmail className="font-icon email-icon" title="Email" />
        </a>
      </div>
    </div>
  );
};

export default Jumbo;
