import "./css/portfolio.css";
import projects from "./portfolioProjects.json";

const Portfolio = () => {
  return (
    <div className="portfolio-project" id="my-portfolio">
      <div className="header">
        <h3>Portfolio</h3>
        <small>
          Here is my some best Portfolio Projects! Using different techs like
          ReactJs, NextJs, Firebase etc..
        </small>
      </div>
      <div className="portfolio-section">
        {projects.map((pro, ind) => (
          <div className="portfolio-card" key={ind}>
            <div className="portfolio-image">
              <img
                src={`./img/${pro.projectImg}`}
                width="100%"
                alt="portfolio-screen"
              />
            </div>
            <div className="portfolio-content">
              <h4 className="portfolio-heading">{pro.projectName}</h4>
              <p className="portfolio-desc">{pro.projectDesc}</p>
              <div className="project-addons">
                <small>
                  Purpose:
                  <strong> {pro.projectPurpose}</strong>{" "}
                </small>{" "}
                <br />
                <small>
                  Features:
                  <strong> {pro.projectFeatures}</strong>{" "}
                </small>
                <br />
                <a href={pro.projectVisit} target="blank">
                  <i className="far fa-globe"></i> visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
