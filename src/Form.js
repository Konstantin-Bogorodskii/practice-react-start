import { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('Привет Мир!');
  const [checked, setChecked] = useState(true);
  const [checkedRadio, setCheckedRadio] = useState(null);
  const fruits = ['Яблоко', 'Виноград', 'Груша', 'Персик'];

  return (
    <form>
      <div>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      </div>
      <div>
        <label>
          Вы готовы?{' '}
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        </label>
      </div>

      <div>
        {fruits.map((item, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                checked={checkedRadio === item}
                onChange={() => setCheckedRadio(item)}
              />
              {item}
            </label>
          );
        })}
      </div>
    </form>
  );
}

export default Form;

// import React, { Component } from 'react';
// class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: 'Some message!',
//     };
//   }

//   inputOnChange(e) {
//     this.setState({
//       value: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input value={this.state.value} onChange={e => this.inputOnChange(e)} />
//       </div>
//     );
//   }
// }

// export default Form;
