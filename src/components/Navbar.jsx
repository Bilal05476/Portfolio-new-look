import { useState, useEffect } from "react";
import "./css/navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const [navIcon, setNavIcon] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  // Change Navbar Background
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <nav
        className={`navbar navbar-expand-md fixed-top 
        ${navbarBackground ? "scrollNavbar" : ""} ${
          navIcon ? "blurryBack" : ""
        }`}
      >
        <div className="logo">
          {location.pathname === "/" && (
            <a href="#top" className="logo-link">
              {"<"}BILAL AHMED {" />"}
            </a>
          )}
          {location.pathname === "/all-projects" && (
            <NavLink to="/" className="logo-link">
              {"<"}BILAL AHMED {" />"}
            </NavLink>
          )}
        </div>
        {location.pathname === "/" && (
          <>
            <button
              className="navbar-toggler p-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              // onClick={() => setNavIcon(!navIcon)}
            >
              {/* <i
                className={`navbar-toggler-icon fas fa-${
                  navIcon ? "times" : "bars"
                }`}
              ></i> */}
              {navIcon ? (
                <FaTimes
                  className="navbar-toggler-icon"
                  // onClick={() => setNavIcon(false)}
                />
              ) : (
                <MdMenu
                  className="navbar-toggler-icon"
                  // onClick={() => setNavIcon(true)}
                />
              )}
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto my-menu-bar">
                <a href="#about-me" className="my-menu">
                  About
                </a>
                <a href="#my-services" className="my-menu">
                  Services
                </a>
                <a href="#my-portfolio" className="my-menu">
                  Portfolio
                </a>

                <a href="#my-skills" className="my-menu">
                  Skills
                </a>

                <a href="#contact" className="my-menu">
                  Contact
                </a>
                <a
                  href="https://bilalthedev.com/"
                  target="blank"
                  className="my-menu"
                >
                  Blog
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
