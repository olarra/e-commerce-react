import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from "./redux/store";
import { Provider } from "react-redux";

import HomeContainer from "./containers/homeConteiner";

ReactDOM.render(  <Provider store={configureStore()}>
    <HomeContainer />
  </Provider>, document.getElementById('root'));
