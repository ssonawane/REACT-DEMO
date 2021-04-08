import React, { Component } from 'react';

class Counter extends Component {

    getBadgeClasses(count) {
        let classes = "badge m-4 badge-";
        classes = classes + (count === 0 ? 'warning' : 'primary');
        return classes
    }

    render() {
        const { counter, deleteCounter, handleIncrement, handleDecrement } = this.props;
        const { value: count, id } = counter
        return <div>
            <h4>Title {id}</h4>
            <span style={this.spanStyle} className={this.getBadgeClasses(count)}>{count === 0 ? 'zero' : count}</span>
            <button className="btn btn-secondary btn-sm m-2" onClick={() => handleIncrement(counter, id)}>increment</button>
            <button className="btn btn-secondary btn-sm m-3" onClick={() => handleDecrement(counter, id)}>decrement</button>
            <button className="btn btn-danger btn-sm" onClick={() => deleteCounter(id)}>delete</button>
        </div>
    }
}

export default Counter;