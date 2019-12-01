import React, { Component } from "react";
import Appbar from "../appbar/Appbar.component";
import { Typography } from "@material-ui/core";

class Confirm extends Component {
  render() {
    return (
      <>
        <Appbar text="Success" />
        <Typography variant="h4">Thank You For Your Submission</Typography>
        <Typography style={{ margin: "1rem auto" }} variant="body1">
          You will get an email with further instructions
        </Typography>
      </>
    );
  }
}

export default Confirm;
