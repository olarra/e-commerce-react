import React, { Component } from 'react';
import HomeContainer from "./containers/homeConteiner";
import CartContainer from "./containers/cartConteiner";

import NoMatch from './ui/pages/NoMatch';
import App from './App';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class RouterConfig extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
               <Route exact path="/" component={HomeContainer}/>
               <Route path="/home" component={HomeContainer}/>
               <Route path="/cart" component={CartContainer}/>
               <Route component={NoMatch}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default RouterConfig;
