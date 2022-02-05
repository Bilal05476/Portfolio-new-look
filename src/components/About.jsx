import "./css/about.css";
import ex from "./img/bg-2.jpg";
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
      <div className="about-section row">
        <div className="about-content-left offset-md-2 col-md-7 col-12">
          <div className="about-text">
            <h3>2018 - 2019 (early)</h3>
            <h3>
              My Humble Starting <hr className="hr" />
            </h3>
            <p>
              Started my journey as a creative designer, enrolled in some basic
              level courses, and then try to do some work on my own and some for
              others. But drop early as this did not much excite me.
            </p>
          </div>
          <img src={ex} alt="about-me" className="about-img" />
        </div>

        <div className="about-content-right offset-md-2 col-md-7 col-12">
          <img src={ex} alt="about-me" className="about-img" />
          <div className="about-text">
            <h3>2019 - Present</h3>
            <h3>
              My Turning Point <hr className="hr" />{" "}
            </h3>
            <p>
              Started my journey as a techy student, enrolled in some basic
              level courses on an online platform like{" "}
              <a
                className="project-visit"
                href="https://coursera.org"
                target="blank"
              >
                Coursera
              </a>
              , and then try to do some work on my own and some for others. And
              stick on a journey that starts from the python programming
              language.
            </p>
          </div>
        </div>

        <div className="about-content-left offset-md-2 col-md-7 col-12">
          <div className="about-text">
            <h3>2019 (late) - Present</h3>
            <h3>
              My Journey Begins <hr className="hr" />
            </h3>
            <p>
              Started my journey as a techy student, enrolled in some basic
              level courses on an online platform like{" "}
              <a
                className="project-visit"
                href="https://coursera.org"
                target="blank"
              >
                Coursera
              </a>
              , and then try to do some work on my own and some for others. And
              stick on a journey that starts from the python programming
              language.
            </p>
          </div>
          <img src={ex} alt="about-me" className="about-img" />
        </div>

        <div className="about-content-last offset-3 offset-md-5 col-md-7 col-2">
          <div className="about-text">Be Part of My Story!</div>
        </div>
      </div>
    </div>
  );
};

export default About;
