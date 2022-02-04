import "./css/jumbotron.css";

const Jumbo = () => {
  return (
    <div className="my-jumbotron" id="top">
      <p className="welcome">Welcome To My Portfolio!</p>
      <strong className="slogan">Provide Digital Solution for your Business</strong>
      <p className="description">
        A Self thought <span>FREELANCE Website Developer</span>.
      </p>
      <a href="#contact">
        <button className="jumbo-button">Contact Now</button>
      </a>
    </div>
  );
};

export default Jumbo;
