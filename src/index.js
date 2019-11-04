import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { rootReducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));