import React, { Component } from "react";

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <span style={{ position: "absolute", left: mouse.x, top: mouse.y }}>
        czd
      </span>
    );
  }
}

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTrack extends Component {
  render() {
    return (
      <>
        <h1>xaxasx</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </>
    );
  }
}

export default MouseTrack;
