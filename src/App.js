import React, { Component } from 'react';

class App extends Component {
  state = {
    display: true,
  };

  handleButton = () => {
    const { display } = this.state;
    this.setState({
      display: !display,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButton}>Show Hello!</button>
        {this.state.display ? <h1>Hello World!</h1> : null}
      </div>
    );
  }
}
export default App;
