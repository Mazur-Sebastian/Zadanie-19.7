import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';


const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(       
    <Provider store={store}>            
        <App />       
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
