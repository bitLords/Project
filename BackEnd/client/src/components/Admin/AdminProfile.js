import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

class AdminProfile extends Component {
    constructor() {
        super()
        this.state = {
            stuNumber: '',
            name: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            stuNumber: decoded.stuNumber,
            name: decoded.name
        })
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h2 className="text-left">ADMIN PROFILE</h2>

                <br></br>
                <br></br>



                <div className="container" style={{ marginLeft: 100 }}>

                    <div className="card-columns">
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}> Courses</h4>
                                <p className="card-text" style={{ color: "white" }}>You can add, delete and update new courses and existing courses.</p>
                                <Link to="/course/list" className="btn btn-info">
                                    Courses
                                </Link>
                            </div>
                        </div>
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}>Instructors</h4>
                                <p className="card-text" style={{ color: "white" }}>You can view,add,delete instructors and notify instructors by emails.</p>
                                <Link to="/admin/instructorsView" className="btn btn-info">
                                    Instructors
                                </Link>
                            </div>
                        </div>

                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}>Students</h4>
                                <p className="card-text" style={{ color: "white" }}>You can view Student details from here allowing to take managerial decisions.</p>
                                <Link to="/admin/studentsView" className="btn btn-info">
                                Students
                                </Link>
                            </div>
                        </div>
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}> Assignments</h4>
                                <p className="card-text" style={{ color: "white" }}>You can view all the assignments that have been distributed from here.</p>
                                <Link to="/admin/assignmentList" className="btn btn-info">
                                Assignments
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}

export default AdminProfile