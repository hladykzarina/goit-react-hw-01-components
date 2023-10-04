import React, { Component } from 'react';
import { Controls } from './controls.jsx';

class MyCounter extends Component {
  static defaultProps = {
    initialValue1: 0,
  };

  state = {
    value1: this.props.initialValue1,
    value2: this.props.initialValue2,
    count: 0,
  };

  handCount = () => {
    this.setState({
      count: this.state.value1 + this.state.value2,
    });
  };

  handleIncrem = () => {
    console.log('CLICK Up');

    this.setState(prev => ({
      value1: prev.value1 + 1,
    }));
  };

  handleDecrem = () => {
    console.log('CLICK Down');

    this.setState(prevState => ({
      value2: prevState.value2 + 1,
    }));
  };

  render() {
    const { value1, value2, count } = this.state;

    return (
      <div>
        <span>{value1}</span>
        <span>{value2}</span>
        <p>{count}</p>
        <Controls
          onIncrement={this.handleIncrem}
          onDecrement={this.handleDecrem}
        />
      </div>
    );
  }
}

export default MyCounter;
