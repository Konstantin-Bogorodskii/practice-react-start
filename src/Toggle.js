import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true,
    };

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonHandler}>
          {this.state.isToggleOn ? 'Включено' : 'Выключено'}
        </button>
      </div>
    );
  }
}

export default Toggle;
