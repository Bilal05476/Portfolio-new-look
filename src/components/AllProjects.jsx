import "./css/portfolio.css";
import projects from "./portfolioProjects";

const AllProjects = () => {
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
                <img src={pro.projectImg} width="100%" alt="portfolio-screen" />
              </div>
              <div className="portfolio-content">
                <h4 className="portfolio-heading">{pro.projectName}</h4>
                <p className="portfolio-desc">{pro.projectDesc}</p>
                <div className="project-addons">
                  <small>
                    Purpose:
                    <strong> {pro.projectPurpose}</strong>
                  </small>
                  <br />
                  <small className="text-left">
                    Features:
                    {pro.projectFeatures.map((item, ind) => (
                      <>
                        <li style={{ listStyle: "none" }} key={ind}>
                          <i className="far fa-check"></i> {item}
                        </li>
                      </>
                    ))}
                  </small>
                  <br />
                  <small className="text-left">
                    Not Include (Under Dev):
                    {pro.projectFeaturesWill.map((item, ind) => (
                      <>
                        <li style={{ listStyle: "none" }} key={ind}>
                          <i className="far fa-times text-danger"></i> {item}
                        </li>
                      </>
                    ))}
                  </small>
                  <br />
                  <br />
                  <a
                    title="Visit Project"
                    className="project-visit"
                    href={pro.projectVisit}
                    target="blank"
                  >
                    <i className="far fa-globe"></i> Try
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default AllProjects;
