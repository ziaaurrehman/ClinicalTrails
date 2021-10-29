import React from "react";
import Getstarted from "./Components/GetStarted/Getstarted";
import University from "./Components/Universitys/University";
import Doucoments from "./Components/Doucoments/Doucoments";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
const LandingPage = () => {
  return (
    <div>
      <Getstarted />
      <University />
      <Doucoments />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
