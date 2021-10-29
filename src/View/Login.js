import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#FFF6F3" }}>
        <div className="loginpage" style={{ padding: "35px" }}>
          <div className="titlesection">
            <h4 className="login_tittle">
              <img src="/assets/img/logo.png" />
            </h4>
            <h5 className="loginbrand">Get Started!</h5>
            <p className="loginp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
              hendrerit diam pretium tristique pretium sit est eget. Nunc,
              lacus, sagittis, non sed libero. At scelerisque ac rhoncus.
            </p>
            <form>
              <div className="loginput" style={{ paddingBottom: "30px" }}>
                <div style={{ marginBottom: "15px" }}>
                  <input className="logwidth" type="text" placeholder="Email" />
                </div>
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
                <div style={{ marginTop: "40px" }}>
                  <div className="textlog">I do not have an account yet.</div>
                  <Link to="/dashboard">
                    <button className="btnlog2" type="submit">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
