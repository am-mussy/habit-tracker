import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { addHabit, changeCheckBox } from './redux/state'


export let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addHabit={addHabit} changeCheckBox={changeCheckBox} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
