import React from "react";

export class ClickCounter extends React.Component {
  state = {
    counter: this.props.counter,
  };
  handleCounterIncrement = () => {
    this.setState((state) => {
      //   this.state.counter += 1; // WHY NOT IN THIS WAY?
      //   console.log(this.state.counter);
      return {
        counter: state.counter + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleCounterIncrement}>Click Me!</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
