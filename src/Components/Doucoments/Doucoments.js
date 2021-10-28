import React from "react";
import "../../App.css";
const Doucoments = () => {
  return (
    <div className="background">
      <div className="Doucoments">
        <div className="maindiv">
          <div className="doucoment">
            <div className="textdou">Awareness and Education</div>
            <div className="douimg">
              <img src="/assets/img/Group1.svg" />
            </div>
          </div>
          <div className="doucoment">
            <div className="textdou">Dynamic Patient Outreach</div>
            <div className="douimg">
              <img src="/assets/img/Group2.svg" />
            </div>
          </div>
          <div className="doucoment">
            <div className="textdou">
              High-Touch Screening and Guided Enrollment
            </div>
            <div className="douimg">
              <img src="/assets/img/Group3.svg" />
            </div>
          </div>
          <div className="doucoment">
            <div className="textdou">
              Real-Time Updates of Enrollment Funnel Metrics
            </div>
            <div className="douimg">
              <img src="/assets/img/Group4.svg" />
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "80px" }} className="getbuttons">
          <button className="startbtn">Get started</button>
          <button className="returnbtn">Returning user</button>
        </div>
      </div>
    </div>
  );
};

export default Doucoments;
