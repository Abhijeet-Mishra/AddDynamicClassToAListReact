import React, { Component } from "react";

export default class MyList extends Component {
  constructor() {
    super();
    this.state = {
      listArray: ["a", "b", "c", "d", "e", "f"]
    };
  }
  showData = e => {
    var element = document.querySelector(".active");
    if (element !== null) {
      element.classList.remove("active");
    }
    e.target.className = "active";
  };
  render() {
    var displayList = this.state.listArray.map((ele, index) => {
      return <li key={index}>{ele}</li>;
    });
    return (
      <div>
        <ul onClick={this.showData}>{displayList}</ul>
      </div>
    );
  }
}
