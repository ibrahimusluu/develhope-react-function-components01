import React from "react";
import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
import { CounterDisplay } from "./CounterDisplay";
// initial value of the counter, the increment interval and the increment amount are passed as props
export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementAmount,
        };
      });
    }, this.props.incrementInterval);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
        <ClickCounter counter={0} />
        {/* <ClickTracker /> */}
      </div>
    );
  }
}
