import React from "react";
import "./Clinical.css";
import StepButtons from "./StepButtons";
const CourseContent = () => {
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
        </div>
        <StepButtons />
        <div className="course_content">
          <div className="headingcontent">Requirements</div>
          <div className="paracontent">
            This course is open to all students. There are no course
            requirements or prerequisites. It is meant to be shared freely.
          </div>
        </div>
        <div className="course_content">
          <div className="headingcontent">Description</div>
          <div className="paracontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
            sagittis, non sed libero. At scelerisque ac rhoncus.
          </div>
        </div>
        <div className="course_content">
          <div className="headingcontent">Content</div>
          <div className="paracontent">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
