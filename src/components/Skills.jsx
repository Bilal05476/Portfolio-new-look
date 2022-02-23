import "./css/skills.css";
import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiNetlify,
  SiPython,
} from "react-icons/si";
import {BsBootstrapFill} from "react-icons/bs";
import {GrReactjs} from "react-icons/gr";



const Skills = () => {
  return (
    <div className="skills" id="my-skills">
      <div className="header spc">
        <h3>My Skills</h3>
        <small>
          I love what I do and I do what my clients love {"&"} work with great
          clients all over the world to create thoughtful and purposeful
          websites. I don't just create websites, I create websites that SELL.
        </small>
      </div>
      <div className="skills-section row">
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <FaHtml5 className="skill-icon html-icon" />
          <h6 className="skill-name">Html5</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <FaCss3Alt className="skill-icon css-icon" />
          <h6 className="skill-name">Css3</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <BsBootstrapFill className="skill-icon bootstrap-icon" />
          <h6 className="skill-name">Bootstrap</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <SiJavascript className="skill-icon js-icon" />
          <h6 className="skill-name">JavaScript</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <GrReactjs className="skill-icon rjs-icon" />
          <h6 className="skill-name">ReactJs</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <FaNodeJs className="skill-icon njs-icon" />
          <h6 className="skill-name">NodeJs</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <SiMongodb className="skill-icon mongo-icon" />
          <h6 className="skill-name">MongoDB</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <SiFirebase className="skill-icon firebase-icon" />
          <h6 className="skill-name">Firebase</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <SiNetlify className="skill-icon netlify-icon" />
          <h6 className="skill-name">Netlify</h6>
        </div>
        <div className="skill-content col-4 col-md-2 mb-3" data-aos="fade-in">
          <SiPython className="skill-icon py-icon" />
          <h6 className="skill-name">Python</h6>
        </div>
      </div>
    </div>
  );
};

export default Skills;
