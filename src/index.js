import state, { subscrabe } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { addHabit, changeCheckBox } from './redux/state'
import { render } from '@testing-library/react';

let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addHabit={addHabit} changeCheckBox={changeCheckBox} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscrabe(rerender)
rerender(state)