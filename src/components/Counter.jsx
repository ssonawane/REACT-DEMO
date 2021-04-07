import React, { Component } from "react";

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      count: 1
    }

    this.handleDecrement = this.handleDecrement.bind(this);
  }

  spanStyle = {
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '5px 20px'
  }

  formatCount() {

  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    const { count } = this.state

    return (
      <React.Fragment>
        <div>
          <span style={this.spanStyle} className={this.getBadgeClasses(count)}>{count === 0 ? 'zero' : count}</span>
          <button className="btn btn-secondary btn-sm m-2" onClick={this.handleIncrement}>increment</button>
          <button className="btn btn-secondary btn-sm" onClick={this.handleDecrement}>decrement</button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses(count) {
    let classes = "badge m-4 badge-";
    classes = classes + (count === 0 ? 'warning' : 'primary');
    return classes
  }
}

export default Counter;
