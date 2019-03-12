import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index from './components/index';
import Kosmos from './components/kosmos';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/kosmos" component={Kosmos} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
