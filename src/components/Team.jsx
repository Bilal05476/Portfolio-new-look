import "./css/team.css";
import member from "./teamData";

const Team = () => {
  return (
    <div className="team" id="my-team">
      <div className="header">
        <h3>My Amazing Team</h3>
        <small>
          Everyone need a team, team work behind the scenes. And I am glad to have such a tech savvy team
          members, <br /> Each individual have their own identity.
        </small>
      </div>
      <div className="team-members-section">
        {member.map((mem, ind) => (
          <div key={ind} className="member-content">
            <img src={mem.memberImg} alt="member" className="member-img" />
            <h4 className="member-name">{mem.memberName}</h4>
            <h4 className="member-designation">{mem.memberDesignation}</h4>
            <div className="member-social-networks">
              <a className="social-link" href={mem.memberLinks[0]}>
                <i className="fab fa-facebook"></i>
              </a>
              <a className="social-link" href={mem.memberLinks[1]}>
                <i className="fab fa-instagram"></i>
              </a>
              <a className="social-link" href={mem.memberLinks[2]}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-link" href={mem.memberLinks[3]}>
                <i className="far fa-globe"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
