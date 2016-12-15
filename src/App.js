import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { store } from './redux/reducers'
import { Provider } from 'react-redux'
import MainWrapper from './wrappers/MainWrapper'

import Landing from './components/Landing'
import Test from './components/Test'
// import Result from './components/Result';
import './App.css'


class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path='/' component={MainWrapper}>
              <IndexRoute component={Landing} />
              <Route path='/test' component={Test} />
              {/* <Route path='/result' component={Result} /> */}
            </Route>
          </Router>
        </Provider>
      </div>

    )
  }
}

export default App
