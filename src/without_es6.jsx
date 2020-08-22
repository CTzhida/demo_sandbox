import React from "react";
import createReactClass from "create-react-class";

const Greeting = createReactClass({
  getDefaultProps: function () {
    return {
      name: "czd"
    };
  },
  render: function () {
    return <h1>hello, {this.props.name}</h1>;
  }
});

export default Greeting;
