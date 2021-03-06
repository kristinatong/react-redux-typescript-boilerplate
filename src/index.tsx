import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';


import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './utils/configureStore'

const history = createBrowserHistory();

const initialState = { heroes: { loading: false, data: [] } }
const store = configureStore(history, initialState)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
