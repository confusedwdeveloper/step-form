import React from "react";
import "./App.css";
import UserForm from "./components/user-form/UserForm.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;
