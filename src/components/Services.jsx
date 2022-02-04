import "./css/services.css";
import service from "./serviceData.json";

const Services = () => {
  return (
    <div className="services" id="my-services">
      <div className="header">
        <h3>Services</h3>
        <small>services slogan goes here now!</small>
      </div>
      <div className="services-section">
        {service.map((item, ind) => (
          <div className="service-card" key={ind}>
            <div className="icon">
              <i className={item.serviceIcon}></i>
            </div>
            <h4 className="services-heading">{item.serviceName}</h4>
            <i className="services-tagline">{item.serviceTagLine}</i>
            <p className="service-desc">{item.serviceDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
