import React from "react";
import Hello from "./Hello";
import FormattedDate from "./FormattedDate";
import Toggle from "./Toggle";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  };

  render() {
    return (
      <div style={styles}>
        <Hello name="matt" />
        <Toggle />
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
