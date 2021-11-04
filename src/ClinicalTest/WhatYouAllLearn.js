import React from "react";
import StepButtons from "./StepButtons";

const WhatYouAllLearn = () => {
  return (
    <div style={{ backgroundColor: "#FFF6F3" }}>
      <div className="loginpage" style={{ padding: "35px" }}>
        <div className="titlesection">
          <h4 className="login_tittle">
            <img src="/assets/img/logo.png" />
          </h4>
          <h5 className="introtittle">What you’ll learn</h5>
        </div>
        <div className="stapperheading">
          <div className="step_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <StepButtons />
        </div>
        <div className="questions">
          <div className="trueimg">
            <img src="/assets/img/true.png" />
          </div>
          <div className="ques">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="questions">
          <div className="trueimg">
            <img src="/assets/img/true.png" />
          </div>
          <div className="ques">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
            sagittis, non sed libero. At scelerisque ac rhoncus.
          </div>
        </div>
        <div className="questions">
          <div className="trueimg">
            <img src="/assets/img/true.png" />
          </div>
          <div className="ques">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
            sagittis, non sed libero. At scelerisque ac rhoncus.
          </div>
        </div>
        <div className="questions">
          <div className="trueimg">
            <img src="/assets/img/true.png" />
          </div>
          <div className="ques">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="questions">
          <div className="trueimg">
            <img src="/assets/img/true.png" />
          </div>
          <div className="ques">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
            sagittis, non sed libero. At scelerisque ac rhoncus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouAllLearn;
