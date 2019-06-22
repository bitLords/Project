import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/UserRegistration/Navbar'
import Landing from './components/UserRegistration/Landing'
import Login from './components/UserRegistration/Login'
import Register from './components/UserRegistration/Register'
import StudentProfile from './components/Student/StudentProfile'
import InstructerProfile from './components/Instructer/InstructerProfile'
import AddCourse from './components/Course/AddCourse'
import ListCourse from './components/Course/ListCourse'
import EditCourse from './components/Course/EditCourse'


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
            <Route exact path="/studentprofile" component={StudentProfile} />
            <Route exact path="/instructorprofile" component={InstructerProfile} />
            <Route exact path="/course/add" component={AddCourse} />
            <Route exact path="/course/list" component={ListCourse} />
            <Route exact path="/edit/:id" component={EditCourse} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
