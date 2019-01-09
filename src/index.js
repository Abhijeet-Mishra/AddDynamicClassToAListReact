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
        Add one element in the center of another element :
        <div className="parent">
          <div className="child" />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
