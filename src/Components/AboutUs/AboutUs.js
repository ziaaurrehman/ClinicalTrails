import React from "react";
import "../../App.css";
const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutimg">
        <img src="/assets/img/thou.svg" />
        <h6 className="about_tittle">About Us</h6>
        <p className="aboutpara">
          Learn about what makes ClinicalTrialsEdu different from other clinical
          trial resources.
        </p>
        <h6 className="learn">Learn More</h6>
      </div>
    </div>
  );
};

export default AboutUs;
