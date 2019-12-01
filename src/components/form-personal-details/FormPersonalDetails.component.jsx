import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Appbar from "../appbar/Appbar.component";

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <Appbar text={"Enter Personal Details"} />
        <TextField
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
          label="Occupation"
          helperText="Enter Your Occupation"
        />
        <br />
        <TextField
          onChange={handleChange("city")}
          defaultValue={values.city}
          label="City"
          helperText="Enter Your City"
        />
        <br />
        <TextField
          onChange={handleChange("bio")}
          defaultValue={values.bio}
          label="Bio"
          helperText="Enter Your Bio"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={this.continue}
        >
          Continue
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={styles1.button}
          onClick={this.back}
        >
          Back
        </Button>
      </>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
const styles1 = {
  button: {
    margin: 15,
    background: "#7986cb"
  }
};

export default FormPersonalDetails;
