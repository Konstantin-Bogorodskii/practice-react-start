import React, { useState } from 'react';
import UseReducer from './UseReducer';

function UseStateButtons() {
  const [counters, setCounters] = useState([0, 0, 0]);

  const increaseCount = n => {
    setCounters(
      counters.map((v, i) => {
        if (n === i) {
          return v + 1;
        }

        return v;
      })
    );
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <button onClick={() => increaseCount(0)}>Меня нажали {counters[0]} раз</button>
        <button onClick={() => increaseCount(1)}>Меня нажали {counters[1]} раз</button>
        <button onClick={() => increaseCount(2)}>Меня нажали {counters[2]} раз</button>
      </div>
      <UseReducer count={1} />
    </div>
  );
}

export default UseStateButtons;
