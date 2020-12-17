import React, {Component} from 'react';

class EvenBind extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello'
    }
  }

  changeMessage = () => {
    this.setState({
      message: 'Goodbye!'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default EvenBind;