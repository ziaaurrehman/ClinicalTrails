import React from "react";
import "./Clinical.css";
const Introducation = () => {
  return (
    <div style={{ backgroundColor: "#FFF6F3" }}>
      <div className="loginpage" style={{ padding: "35px" }}>
        <div className="titlesection">
          <h4 className="login_tittle">
            <img src="/assets/img/logo.png" />
          </h4>
          <h5 className="introtittle">Introduction</h5>
        </div>
        <div className="stapperheading">
          <div className="step_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="stepbtns">
            <button style={{ color: "#f15822" }} className="stepbtn">
              Begin
            </button>
            <button className="stepbtn">What you’ll learn</button>
            <button className="stepbtn">Course Content</button>
          </div>
        </div>
        <div className="videoimg">
          <div className="playbtnn">
            <img src="/assets/img/playbtn.png" />
          </div>
          <img className="vidimg" src="/assets/img/videoimg.png" />
        </div>
      </div>
    </div>
  );
};

export default Introducation;
