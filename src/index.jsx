import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App.jsx';
import Store from './store/store';

const root = (
  <Provider Store={Store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('app'));
