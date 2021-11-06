import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';

function UseReducer({ count }) {
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {
          count: state.count + 1,
        };
      case 'decrement':
        return {
          count: state.count - 1,
        };
      case 'reset':
        return {
          count: action.payload,
        };

      default:
        return state;
    }
  };

  const incrementCount = () => {
    countDispatch({
      type: 'increment',
    });
  };
  const decrementCount = () => {
    countDispatch({
      type: 'decrement',
    });
  };
  const resetCount = () => {
    countDispatch({
      type: 'reset',
      payload: count,
    });
  };

  const [countState, countDispatch] = useReducer(countReducer, {
    count: count,
  });

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2 style={{ margin: '0', marginBottom: '15px', color: 'lightblue' }}>UseReducer хук</h2>
      <h3>initial Count: {countState.count}</h3>
      <Button style={{ margin: '10px' }} variant="outline-primary" onClick={incrementCount}>
        Increment
      </Button>
      <Button style={{ margin: '10px' }} variant="outline-danger" onClick={decrementCount}>
        Decrements
      </Button>
      <Button style={{ margin: '10px' }} variant="outline-warning" onClick={resetCount}>
        Reset
      </Button>
    </div>
  );
}

export default UseReducer;

//  UseReducer - это альтарнатива reducers из redux
