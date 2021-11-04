import React from "react";
import StepButtons from "./StepButtons";
import { Link } from "react-router-dom";

const IntroBegain = () => {
  return (
    <div style={{ backgroundColor: "#FFF6F3" }}>
      <div className="loginpage" style={{ padding: "35px" }}>
        <div className="titlesection">
          <h4 className="login_tittle">
            <img src="/assets/img/logo.png" />
          </h4>
          <h5 className="introtittle">1.1 Introduction</h5>
        </div>
        <div className="stapperheading">
          <div className="step_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <StepButtons />
        </div>
        <div className="videoimg">
          <div className="playbtnn">
            <img src="/assets/img/playbtn.png" />
          </div>
          <img className="vidimg" src="/assets/img/videoimg.png" />
        </div>
        <div className="trans">
          <div className="absoflex">
            <div className="absotext">Next - MCQ Exam</div>
            <div className="absobtn">
              <button className="btns1">Watch again</button>

              <Link to="/mcqs">
                {" "}
                <button className="btns">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBegain;
