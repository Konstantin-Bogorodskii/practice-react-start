import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => {
//           this.handleClick(i);
//         }}
//       />
//     );
//   }

//   render() {
//     const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));

// function greet(obj) {
//   return obj.person + ' ' + obj.surname;
// }

// const obj = {
//   person: 'Kostya',
//   surname: 'Bogodskiy',
// };
// // const element = <h1>Привет {greet(obj)}!</h1>;
// // ReactDOM.render(element, document.getElementById('root'));

// function Welcom(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// function tick() {
//   const element = (
//     <div>
//       <h1>Привет {greet(obj)}!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
//   // Несмотря на то, что мы создаём элемент, описывающий всё UI-дерево, каждую секунду React DOM изменяет только текстовый узел, содержимое которого изменилось.
// }
// setInterval(tick, 1000);

// function App() {
//   return (
//     <div>
//       <Welcom name="Kostya" />;
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

function Clock(props) {
  return (
    <div>
      <h1>Привет Мир!</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);
