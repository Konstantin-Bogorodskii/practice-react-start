import React, { useState, useMemo } from 'react';

function createUser(name, surname) {
  const user = { name, surname };
  return user;
}

function UseMemo() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [count, setCount] = useState(0);

  const user = useMemo(() => createUser(name, surname), [name, surname]);
  // Мы хотим чтобы этот объект не перерендерился каждый раз, а запоминался в памяти пока одна из зависимостей не будет изменена [name, surname]

  return (
    <div>
      <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Введите Имя" />
        <input
          value={surname}
          onChange={e => setSurname(e.target.value)}
          placeholder="Введите Фамилию"
        />
      </form>
      <div>{JSON.stringify(user)}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>На меня нажали {count} раз</button>
      </div>
    </div>
  );
}

export default UseMemo;
