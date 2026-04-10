import { Component, useState } from "react";
import Text from "./components/Text";

class App_Class extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
      count1: 1000,
    };
  }

  increment = () => {
    // this.setState({...this.state, count: this.state.count + 1 });
    this.setState((oldState) => {
      return {
        ...oldState,
        count: oldState.count + 1,
      };
    });
  };

  render() {
    return (
      <>
        <Text count={this.state.count} />
        <button onClick={this.increment}>INC</button>
      </>
    );
  }
}

export default App_Class;
