import React, { Component } from 'react';

class ListUser extends Component {
  render() {
    let users = [
      { name: 'Vasiliy', surname: 'Rodionov' },
      { name: 'Max', surname: 'Kravchenko' },
      { name: 'Misha', surname: 'Kuleshov' },
      { name: 'Nastya', surname: 'Alimova' },
      { name: 'Kolya', surname: 'Alpatov' },
    ];

    return (
      <ul>
        {users.map((item, index) => {
          const even = index % 2 === 0;
          if (even) {
            return (
              <li key={index} style={{ color: 'green' }}>
                {item.name} {item.surname}
              </li>
            );
          }
          return (
            <li key={index}>
              {item.name} {item.surname}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListUser;
