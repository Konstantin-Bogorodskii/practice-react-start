import React, { useState, useCallback, useEffect } from 'react';

function UseCallback() {
  const [message, setMessage] = useState('Hello everyone!');
  const [count, setCount] = useState();

  const greet = useCallback(text => {
    console.log(text);
  });

  useEffect(() => {
    greet(message);
  }, [greet, message]);

  return <div></div>;
}

export default UseCallback;
