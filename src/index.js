import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from "./redux/store";
import { Provider } from "react-redux";


import Router from './Router';


ReactDOM.render(  <Provider store={configureStore()}>
    <Router />
  </Provider>, document.getElementById('root'));
