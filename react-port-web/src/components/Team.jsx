import "./css/team.css";

const Team = () => {
  return (
    <div className="team" id="my-team">
      <div className="header">
        <h3>My Amazing Team</h3>
        <small>team slogan goes here now!</small>
      </div>
      <div className="team-members-section">
        <div className="member-content">
          <img src="./img/bg-2.jpg" alt="member" className="member-img" />
          <h4 className="member-name">Sheraz Ahmed</h4>
          <h4 className="member-designation">Graphic Designer</h4>
          <div className="member-social-networks">
            <a className="social-link" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="social-link" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="social-link" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="social-link" href="#">
              <i className="far fa-globe"></i>
            </a>
          </div>
        </div>
        <div className="member-content">
          <img src="./img/bg-2.jpg" alt="member" className="member-img" />
          <h4 className="member-name">Sheikh Khurram</h4>
          <h4 className="member-designation">Social Media Expert</h4>
          <div className="member-social-networks">
            <a className="social-link" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="social-link" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="social-link" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="social-link" href="#">
              <i className="far fa-globe"></i>
            </a>
          </div>
        </div>
        <div className="member-content">
          <img src="./img/bg-2.jpg" alt="member" className="member-img" />
          <h4 className="member-name">Krish Kanojia</h4>
          <h4 className="member-designation">Application Developer</h4>
          <div className="member-social-networks">
            <a className="social-link" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="social-link" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="social-link" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="social-link" href="#">
              <i className="far fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
