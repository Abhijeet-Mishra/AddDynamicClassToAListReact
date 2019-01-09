import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyList from "./list";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add active class dynammically to a list of elements</h1>
        <MyList />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
