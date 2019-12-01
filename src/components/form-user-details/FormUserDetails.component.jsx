import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Appbar from "../appbar/Appbar.component";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <Appbar />
        <TextField
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
          label="First Name"
          helperText="Enter Your First Name"
        />
        <br />
        <TextField
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
          label="Last Name"
          helperText="Enter Your Last Name"
        />
        <br />
        <TextField
          onChange={handleChange("email")}
          defaultValue={values.email}
          label="Email"
          helperText="Enter Your Email"
          type="email"
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
      </>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
