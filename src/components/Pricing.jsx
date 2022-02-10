import "./css/pricing.css";
import packages from "./pricingData";

const Pricing = () => {
  return (
    <div className="package" id="pricing">
      <div className="header spc">
        <h3>Hire according to budget</h3>
        <small>The value you get from this, Pricing is a penny for that!</small>
      </div>
      <div className="package-section">
        {packages.map((pack, ind) => (
          <div
            key={ind}
            className="package-content"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <i className="package-icon fas fa-laptop"></i>
            <h4 className="package-name">{pack.packageName}</h4>
            <div className="package-pricing">
              <strong className="price">${pack.packagePrice}</strong>
              <sub> / Month</sub>
            </div>
            {pack.include.map((item, ind) => (
              <div className="package-item" key={ind}>
                <li style={{ listStyle: "none" }} className="item-name">
                  <i className="far fa-check"></i> {item}
                </li>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
