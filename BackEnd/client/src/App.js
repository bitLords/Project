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
import StudentCourseList from './components/Student/StudentCourseList'
import ListAssignment from './components/Assignments/ListAssignment'
import EditAssignment from './components/Assignments/EditAssignment'
import AddAssignment from './components/Assignments/AddAssignment'
import InstructorCourseList from './components/Instructer/InstructorCourseList'
import InstructorStudentList from './components/Instructer/InstructorStudentList'
import InstructorInfoAdd from './components/Instructer/InstructorInfoAdd'
import InstructorInfoView from './components/Instructer/InstructorInfoView'
import StudentInfoAdd from './components/Student/StudentInfoAdd'
import StudentInfoView from './components/Student/StudentInfoView'
import AdminProfile from './components/Admin/AdminProfile'
import ViewInstructors from './components/Admin/ViewInstructors'
import ViewStudents from './components/Admin/ViewStudents'
import StudentAssignmentList from './components/Assignments/AssignmentStudentView'
import InstructorAdd from './components/Admin/InstructorAdd'
import AssignmentAdminList from './components/Assignments/AssignmentAdminView'


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
            <Route exact path="/course/edit/:id" component={EditCourse} />
            <Route exact path="/course/delete/:id" component={ListCourse} />
            <Route exact path="/student/courseList" component={StudentCourseList} />
            <Route exact path="/assignment/list" component={ListAssignment} />
            <Route exact path="/assignment/add" component={AddAssignment} />
            <Route exact path="/assignment/edit/:id" component={EditAssignment} />
            <Route exact path="/instructor/courseList" component={InstructorCourseList} />
            <Route exact path="/instructor/studentList" component={InstructorStudentList} />
            <Route exact path="/instructor/infoAdd" component={InstructorInfoAdd} />
            <Route exact path="/instructor/infoView:id" component={InstructorInfoView} />
            <Route exact path="/student/infoAdd" component={StudentInfoAdd} />
            <Route exact path="/student/infoView:id" component={StudentInfoView} />
            <Route exact path="/adminprofile" component={AdminProfile} />
            <Route exact path="/admin/instructorsView" component={ViewInstructors} />
            <Route exact path="/admin/studentsView" component={ViewStudents} />
            <Route exact path="/student/assignmentList" component={StudentAssignmentList} />
            <Route exact path="/admin/instructorAdd" component={InstructorAdd} />
            <Route exact path="/admin/assignmentList" component={AssignmentAdminList} />


          </div>
        </div>
      </Router>
    );
  }
}

export default App;
