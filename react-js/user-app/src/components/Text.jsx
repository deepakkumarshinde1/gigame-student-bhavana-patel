import { Component } from "react";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Count: {this.props.count}</h1>
      </>
    );
  }
}

export default Text;
