import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Registration from "./View/Registration";
import Login from "./View/Login";
import Introducation from "./ClinicalTest/Introducation";
import IntroBegain from "./ClinicalTest/IntroBegain";
import WhatYouAllLearn from "./ClinicalTest/WhatYouAllLearn";
import Mcqs from "./ClinicalTest/Mcqs.";
import CourseContent from "./ClinicalTest/CourseContent";
import TrailPass from "./ClinicalTest/TrailPass";
import NeedImprovement from "./ClinicalTest/NeedImprovement";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/intro" component={Introducation} />
        <Route path="/intro-begain" component={IntroBegain} />
        <Route path="/whatyou" component={WhatYouAllLearn} />
        <Route path="/mcqs" component={Mcqs} />
        <Route path="/course-content" component={CourseContent} />
        <Route path="/trailpass" component={TrailPass} />
        <Route path="/need-imrovement" component={NeedImprovement} />
      </Switch>
    </div>
  );
}

export default App;
