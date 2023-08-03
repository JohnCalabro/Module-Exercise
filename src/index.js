import React from 'react';
import ReactDOM from 'react-dom/client';
import fruits from './food';
import {choice, remove} from './helpers';
import App from './App';
import reportWebVitals from './reportWebVitals';



let rando = choice(fruits)

let left = remove(rando, fruits)
console.log(left)

console.log(`I'd like  one ${rando}, please.`)
console.log(`Here you go: ${rando}`)
console.log("Delicious! May I have another?")
console.log(`I’m sorry, we’re all out. We have ${left} left.`)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
