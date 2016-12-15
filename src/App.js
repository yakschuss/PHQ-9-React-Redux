import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MainWrapper from './wrappers/MainWrapper';

import Landing from './components/Landing';
import Test from './components/Test';
// import Result from './components/Result';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={MainWrapper}>
            <IndexRoute component={Landing}/>
            <Route path='/test' component={Test} />
            {/* <Route path='/result' component={Result} /> */}
          </Route>
        </Router>
      </div>

    );
  }
}

export default App;
