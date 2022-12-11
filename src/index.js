import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Components/App.js';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';

const root = ReactDOM.createRoot(document.getElementById('root'));

const newState = {
  ListOfTask: [
    {
      id: 0,
      date: new Date().toLocaleString(),
      tittle: 'My First task',
      task: 'Learning JavaScript',
    }
  ]
}

const reducer = (state = newState, action) => {
  switch(action.type){
    case 'PUSH':
      return {...state, ListOfTask: [...state.ListOfTask, action.payload]};
    case 'POP': 
      return {...state, ListOfTask: state.ListOfTask.filter(el=>el.id !== action.payload.id)};
    default : 
      return {...state}
    }
}

const store = createStore(reducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
