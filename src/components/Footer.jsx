import "./css/footer.css";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <div className="footer">
      <div className="social-icons-section">
        <a className="social-link" href="#">
          <i title="GitHub" className="fab fa-github"></i>
        </a>
        <a className="social-link" href="#">
          <i title="Instagram" className="fab fa-instagram"></i>
        </a>
        <a className="social-link" href="#">
          <i title="LinkedIn" className="fab fa-linkedin-in"></i>
        </a>
        <a className="social-link" href="#">
          <i title="Facebook" className="fab fa-facebook"></i>
        </a>
        <a className="social-link" href="#">
          <i title="Email" className="far fa-envelope"></i>
        </a>
        <a className="social-link" href="#top">
          <i title="Scroll Top" className="far fa-arrow-up"></i>
        </a>
      </div>
      <div className="right-section text-center">
        <small>
          Copyright &copy; {year},
          <br /> Made with
          <i className="mx-1 text-danger fas fa-heart"></i>By Bilal Ahmed
        </small>
      </div>
    </div>
  );
};

export default Footer;
