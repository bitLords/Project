import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

class StudentProfile extends Component {
    constructor() {
        super()
        this.state = {
            stuNumber: '',
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            stuNumber: decoded.stuNumber,
            name: decoded.name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h2 className="text-left">MY PROFILE</h2>
                <table className="table ">
                    <tbody>
                        <tr>
                            <td>Student No </td>
                            <td>{this.state.stuNumber}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.name}</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <br></br>

                <div className="container" style={{marginLeft: 100}}>

                    <div className="card-columns">
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}> Courses</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to="/student/courseList" className="btn btn-success">
                                    Courses
                                </Link>
                            </div>
                        </div>
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}> View Student Info</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to="/student/infoAdd" className="btn btn-success">
                                    View Student Info
                                </Link>
                            </div>
                        </div>
                        
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}>Assignments</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to="/assignment/list" className="btn btn-success">
                                    Assignments
                                </Link>
                            </div>
                        </div>
                        <div className="card bg-dark">
                            <div className="card-body text-left">
                                <h4 className="card-title" style={{ color: "white" }}> Assignments2</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text some example text. John Doe is an architect and engineer</p>
                                <Link to="/assignment/list" className="btn btn-success">
                                    Assignments2
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
               
            </div>
           
        )
    }
}

export default StudentProfile