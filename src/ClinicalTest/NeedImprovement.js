import React from "react";

const NeedImprovement = () => {
  return (
    <div style={{ backgroundColor: "#FFF6F3" }}>
      <div className="loginpage" style={{ padding: "35px" }}>
        <div className="titlesection">
          <h4 className="login_tittle">
            <img src="/assets/img/logo.png" />
          </h4>
          <h5 className="introtittle">1.1 - MCQ exam</h5>
        </div>
        <div className="stapperheading">
          <div className="step_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="middleitems">
          <div className="trailpass">Need improvement!</div>
          <div className="trail_para">
            You have got 80/100 marks in the exam you have attempted. You may
            repeat the exam to improve. Thank You.
          </div>
          <div className="passbtn">
            <button className="Retakebtn">Revisit course</button>
            <button className="Continuebtn">Retake</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedImprovement;
