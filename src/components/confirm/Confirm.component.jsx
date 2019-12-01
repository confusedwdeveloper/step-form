import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Appbar from "../appbar/Appbar.component";
import { List, ListItem, ListItemText } from "@material-ui/core";

class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;

    return (
      <>
        <Appbar text="Confirm User Data" />
        <List>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem style={{ textAlign: "center" }}>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>

        <br />
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={this.continue}
        >
          Confirm & Continue
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

export default Success;
