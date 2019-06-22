import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/UserRegistration/Navbar'
import Landing from './components/UserRegistration/Landing'
import Login from './components/UserRegistration/Login'
import Register from './components/UserRegistration/Register'
import Profile from './components/UserRegistration/Profile'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
