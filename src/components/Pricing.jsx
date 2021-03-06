import "./css/pricing.css";
import packages from "./pricingData";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import {FaLaptop} from "react-icons/fa";

const Pricing = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="package" id="pricing">
      <div className="header spc">
        <h3>Hire according to budget</h3>
        <small>The value you get from this, Pricing is a penny for that!</small>
      </div>
      <div className="package-section">
        {packages.map((pack, ind) => {
          const someDetails = pack.include[0];
        
          return (
            <div
              key={ind}
              className="package-content"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <FaLaptop className="package-icon" />
              <h4 className="package-name">{pack.packageName}</h4>
              <div className="package-pricing">
                <strong className="price">${pack.packagePrice}</strong>
                <sub> / Month</sub>
                <br />
                <strong>{pack.packageFor}</strong>
              </div>

              {!show && (
                <div className="package-item">
                  <li style={{ listStyle: "none" }} className="item-name">
                    <BiCheck className="check-icon" /> {someDetails}
                  </li>
                </div>
              )}

              {pack.include.map((item, ind) => (
                <div className="package-item" key={ind}>
                  {show && (
                    <li style={{ listStyle: "none" }} className="item-name">
                      <BiCheck className="check-icon" /> {item}
                    </li>
                  )}
                </div>
              ))}
              {!show ? (
                <button
                  className="jumbo-button mt-3"
                  onClick={() => setShow(true)}
                >
                  Show More
                </button>
              ) : (
                <button
                  className="jumbo-button mt-3"
                  onClick={() => setShow(false)}
                >
                  Hide
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
