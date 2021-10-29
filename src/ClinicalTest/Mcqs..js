import React from "react";
import { Radio } from "semantic-ui-react";
import { FormControlLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormLabel } from "@mui/material";
const Mcqs = () => {
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
          <div className="marks">Score: 80 / 100</div>
        </div>
        <div className="mcqs_para">
          Q 5/5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
          hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
          sagittis, non sed libero. At scelerisque ac rhoncus.
        </div>

        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Lorem ipsum."
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Lorem ipsum."
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Lorem ipsum."
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Lorem ipsum."
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Mcqs;
