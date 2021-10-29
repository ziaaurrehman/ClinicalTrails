import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";
const Registration = () => {
  return (
    <div style={{ backgroundColor: "#FFF6F3" }}>
      <div className="loginpage" style={{ padding: "35px" }}>
        <div className="titlesection">
          <h4 className="login_tittle">
            <img src="/assets/img/logo.png" />
          </h4>
          <h5 className="loginbrand">Get Started!</h5>
          <p className="loginp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
            sagittis, non sed libero. At scelerisque ac rhoncus.
          </p>
          <form>
            <div className="manan" style={{ paddingBottom: "15px" }}>
              <input className="logwi" type="text" placeholder="First Name" />
              <input
                style={{ marginLeft: "18px" }}
                className="logwi"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div style={{ paddingBottom: "15px" }}>
              <input className="logwi" type="text" placeholder="Email" />
              <input
                style={{ marginLeft: "18px" }}
                className="logwi"
                type="text"
                placeholder="Phone Number"
              />
            </div>

            <div className="loginput" style={{ paddingBottom: "30px" }}>
              <div style={{ marginBottom: "15px" }}>
                <input
                  className="logwidth"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  className="logwidth"
                  type="text"
                  placeholder="Confirm Password"
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <input
                  className="logwidth"
                  type="text"
                  placeholder="Race / Ethnicity"
                />
              </div>
              <div>
                <div className="textlog">
                  I already have an account registered.
                </div>
                <Link to="/dashboard">
                  <button className="btnlog2" type="submit">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
