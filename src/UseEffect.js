// import React, { useEffect, useState } from 'react';

// function UseEffect() {
// useEffect(() =>{
// Получили элемент перед рендерингом
//   console.log(document.querySelector('#useP'));
// }) // - сработает после рендеринга

// const [users, setusers] = useState([]);
// useEffect(() => {
//   fetch('/users')
//     .then(response => response.json())
//     .then(users => setusers(users));
// }, []); // - Вызовется только ОДИН РАЗ

// const [users, setusers] = useState([]);
// const [search, setSearch] = useState('')
// useEffect(() => {
//   fetch('/users?search=' + search)
//     .then(response => response.json())
//     .then(users => setusers(users));
// }, [search]); // - Вызовется в каждом последующем рендеренге, когда этот search изменён

// const [timer, setTimer] = useState(0);
// // setInterval(() => {
// //   setTimer(timer + 1);
// // }, 1000); // - Так при каждом вызовет setInterval компонент будет рендериться заново и интервалы будут накладываться друг на друга
// useEffect(() => {
//   const flagInterval = setInterval(() => {
//     console.log('fired');
//     setTimer(timer + 1);
//   }, 1000);

//   return () => clearInterval(flagInterval);
// });

//   return (
//     <div>
//       <p id="useP">Hello My Friend! :D</p>
//       {/* <p>Current time: {timer}</p> */}
//     </div>
//   );
// }

// export default UseEffect;
