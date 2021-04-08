import React, { Component } from "react";
import Counter from './Counter'

class Counters extends Component {

  constructor() {
    super();

    this.state = {
      count: 1,
      counters: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 }
      ]
    }

  }

  deleteCounter = (id) => {
    console.log("deleted")
    let newCounters = [];
    for (let i in this.state.counters) {
      if (this.state.counters[i].id !== id) {
        newCounters.push(this.state.counters[i])
      }
    }

    this.setState({ counters: newCounters })
  }

  resetCounter = () => {
    let newCounters = [];

    for (let i in this.state.counters) {
      newCounters.push({
        id: this.state.counters[i].id,
        value: 0
      })
    }

    this.setState({ counters: newCounters })
  }

  handleIncrement = (counter, id) => {
    this.state.counters.splice(id, 1, { id: id, value: (counter.value + 1) });
    this.setState({ counters: this.state.counters })
  }

  handleDecrement = (counter, id) => {
    this.state.counters.splice(id, 1, { id: id, value: (counter.value - 1) });
    this.setState({ counters: this.state.counters })
  }

  spanStyle = {
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '5px 20px'
  }

  render() {

    return (
      <React.Fragment>
        {this.state.counters.map(counter => {
          return <Counter
            key={counter.id}
            counter={counter}
            deleteCounter={this.deleteCounter}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          >
            <h4>Title</h4>
          </Counter>
        })}
        <button className="btn btn-primary btn-sm" onClick={this.resetCounter}>Reset</button>
      </React.Fragment>
    );
  }

}

export default Counters;
