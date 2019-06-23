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
                                <p className="card-text" style={{ color: "white" }}>Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to="/course/list" className="btn btn-success">
                                    Courses
                                </Link>
                            </div>
                        </div>
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}>Instructors</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to="/admin/instructorsView" className="btn btn-success">
                                    Instructors
                                </Link>
                            </div>
                        </div>

                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}>Students</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to="/admin/studentsView" className="btn btn-success">
                                Students
                                </Link>
                            </div>
                        </div>
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}> Assignments</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to="/admin/assignmentList" className="btn btn-success">
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