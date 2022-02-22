import "./css/footer.css";
import { useEffect, useState } from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsArrowUpCircleFill,
  BsSuitHeartFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <div className="footer">
      <div className="social-icons-section">
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
        <a className="social-link" href="#top">
          <BsArrowUpCircleFill className="font-icon" title="Scroll To Top" />
        </a>
      </div>
      <div className="right-section text-center">
        <small>
          Copyright &copy; {year},
          <br /> Made with
          <BsSuitHeartFill className="mx-1 text-danger" />
          By Bilal Ahmed
        </small>
      </div>
    </div>
  );
};

export default Footer;
