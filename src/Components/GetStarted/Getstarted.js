import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const Getstarted = () => {
  return (
    <div className="getstarted">
      <div className="managewith">
        <div className="logodiv">
          <img src="/assets/img/Logo.png" />
        </div>
        <div className="heading">
          Your Place to Connect with Health Research
        </div>
        <p className="clinicpara">
          Whether you’re looking to earn rewards, access alternative care, or
          make an impact, Honeybee helps people connect with health researchers
          to participate in research studies & clinical trials.
        </p>
        <div className="see">
          <img src="/assets/img/oooo.svg" />
        </div>
        <div className="mine">I’m here to</div>
        <div className="getbuttons">
          <Link to="/login">
            <button className="startbtn">Get started</button>
          </Link>
          <button className="returnbtn">Returning user</button>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
