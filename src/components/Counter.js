import React, {Component} from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  incrementCounter() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }), () => {
      console.log(this.state.count)
    })
  }

  incrementFive() {
    for (let i = 0; i < 5; i++) {
      this.incrementCounter()
    }
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }

}

export default Counter;