import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';
// In the works
// intializing the our first initial state
let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo'
  }]
}
// we want to pass in the initialState created from above
let store = configureStore(initialState)

ReactDOM.render(
  // we want to pass in store that we created above
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
