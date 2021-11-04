import React from "react";
import "./Clinical.css";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { margin } from "@mui/system";
const Mcqs = () => {
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
          <div className="marks">Score: 80 / 100</div>
        </div>
        <div className="mcqs_para">
          Q 5/5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
          hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
          sagittis, non sed libero. At scelerisque ac rhoncus.
        </div>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Col sm={10}>
              <Form.Check
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
                type="radio"
                label="Lorem ipsum."
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
                type="radio"
                label="Lorem ipsum."
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
                type="radio"
                label="Lorem ipsum."
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
              <Form.Check
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
                type="radio"
                label="Lorem ipsum."
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
              <Form.Check
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
                type="radio"
                label="Lorem ipsum."
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>
      </div>
    </div>
  );
};

export default Mcqs;
