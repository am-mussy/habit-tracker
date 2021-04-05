import store, { subscrabe } from './redux/reduxStore';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';



let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
                {/* <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)} /> */}
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerender(store.getState())



store.subscribe(() => {
    let state = store.getState()
    rerender(state)
})