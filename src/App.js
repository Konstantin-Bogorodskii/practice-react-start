import React, { Component } from 'react';
import Form from './Form';
import ListUser from './ListUsers';

import Toggle from './Toggle';
import UseMemo from './UseMemo';
// import UseEffect from './UseEffect';
import UseStateButtons from './UseStateButtons';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ListUser />
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <Form />
        </div>
        <UseStateButtons />
        {/* <UseEffect /> */}
        <UseMemo />
      </div>
    );
  }
}
export default App;
