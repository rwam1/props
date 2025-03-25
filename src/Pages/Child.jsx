import React, { Component } from "react";
import "./Table.css";
export default class Child extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        Child {this.props.name} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, aspernatur enim consequatur voluptates quo sint id nostrum quam quae quaerat, libero quasi, eos eius non. Temporibus dolorem quae explicabo libero aliquam esse inventore quisquam!
        <button className="btn"> click me</button>
        <ul>
          {this.props.data.map((item) => {
            return <li>{item.column}</li>;
          })}
        </ul>
      </div>
    );
  }
}
