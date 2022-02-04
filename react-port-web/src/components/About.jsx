import "./css/about.css";

const About = () => {
  return (
    <div className="about" id="about-me">
      <div className="header">
        <h3>About</h3>
        <small>
          About slogan goes here now! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque, iste iusto facilis adipisci.
        </small>
      </div>
      <div className="about-section">
        <div className="about-content-left">
          <div className="about-text">
            <h3>2009 - 2011</h3>
            <h3>My Humble Starting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
              possimus! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Rem, possimus!
            </p>
          </div>
          <img src="./img/bg-2.jpg" alt="about-me" className="about-img" />
        </div>
        <div className="about-content-right">
          <img src="./img/bg-2.jpg" alt="about-me" className="about-img" />
          <div className="about-text">
            <h3>2009 - 2011</h3>
            <h3>My Humble Starting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
              possimus! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Rem, possimus!
            </p>
          </div>
        </div>
        <div className="about-content-left">
          <div className="about-text">
            <h3>2009 - 2011</h3>
            <h3>My Humble Starting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
              possimus! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Rem, possimus!
            </p>
          </div>
          <img src="./img/bg-2.jpg" alt="about-me" className="about-img" />
        </div>
        <div className="about-content-last">
          <div className="about-text">Be Part of My Story!</div>
        </div>
      </div>
    </div>
  );
};

export default About;
