import React, {Component} from 'react';

class Message extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Welcome visitor',
      user: 'Daniele Antoci'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing'
    })
    return undefined;
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.user}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }

}

export default Message;