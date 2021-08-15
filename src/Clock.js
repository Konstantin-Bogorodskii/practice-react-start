import React, { Component, useState } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Текущее время:',
      date: new Date(),
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({
        date: new Date(),
        counter: state.counter + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.counter}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default Clock;

// function Clock() {
//   const [state, setState] = useState(new Date());

//   setInterval(() => {
//     setState(new Date());
//   }, 1000);

//   return <p>{state.toLocaleTimeString()}</p>;
// }

// export default Clock;
