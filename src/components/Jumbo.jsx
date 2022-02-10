import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./css/jumbotron.css";

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
        A Self thought <span>FREELANCE Website Developer</span>.
      </p>
      <a
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2500"
        href="#contact"
      >
        <button className="jumbo-button">Contact Now</button>
      </a>
    </div>
  );
};

export default Jumbo;
