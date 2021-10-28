import React from "react";

const University = () => {
  return (
    <div className="university">
      <div className="teamspara">
        Over <span style={{ fontFamily: "popbo" }}>500 research teams</span>{" "}
        have trusted ClinicalTrialEdu to connect with{" "}
        <span style={{ fontFamily: "popbo" }}>
          thousands of participants each month.
        </span>
      </div>
      <div className="uniimages">
        <div className="unii">
          <img src="/assets/img/cliantha.png" />
        </div>
        <div className="unii">
          <img src="/assets/img/calgary.png" />
        </div>
        <div className="unii">
          <img src="/assets/img/sinai.png" />
        </div>
        <div className="unii">
          <img src="/assets/img/kgk.png" />
        </div>
      </div>
    </div>
  );
};

export default University;
