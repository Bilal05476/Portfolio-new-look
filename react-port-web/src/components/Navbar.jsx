import { useState } from "react";
import "./css/navbar.css";

const Navbar = () => {
  const [navIcon, setNavIcon] = useState(false);
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="logo">
        <a href="#top" className="logo-link">
          {"<"}Bilal Ahmed {" />"}
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        // onClick={() => setNavIcon(!navIcon)}
      >
        {navIcon && <i class="navbar-toggler-icon fas fa-times"></i>}
        {!navIcon && <i class="navbar-toggler-icon fas fa-bars"></i>}
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto my-menu-bar">
          <a href="#my-services" className="my-menu">
            Services
          </a>
          <a href="#my-portfolio" className="my-menu">
            Portfolio
          </a>
          <a href="#about-me" className="my-menu">
            About
          </a>
          <a href="#my-skills" className="my-menu">
            Skills
          </a>
          <a href="#my-team" className="my-menu">
            Team
          </a>
          <a href="#contact" className="my-menu">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
