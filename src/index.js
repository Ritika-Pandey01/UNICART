import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <Provider store={store}>
    <App />
  </Provider>
  
);

reportWebVitals();
