import React, {Component} from 'react';

class ClassClick extends Component {

  clickHandler() {
    console.log('Button click has been done')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>ClickMee</button>
      </div>
    );
  }
}

export default ClassClick;