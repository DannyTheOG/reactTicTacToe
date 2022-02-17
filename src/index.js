import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TicTacToe from './components/ticTacToe';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);


// function tick() {
//   ReactDOM.render(
//     <TicTacToe />,
//   document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

reportWebVitals();
