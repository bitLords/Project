import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

class StudentProfile extends Component {
    constructor() {
        super()
        this.state = {
            stuNumber: '',
            name: '',
            email:''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            stuNumber: decoded.stuNumber,
            name: decoded.name,
            email: decoded.email
        })
    }

    render () {
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

                <div className="list-group">
                    <Link to="/studentprofile" className="btn btn-primary">
                        Courses
                    </Link>
                    <Link to="/studentprofile" className="btn btn-success">
                        View Student Info
                    </Link>
                    <Link to="/studentprofile" className="btn btn-primary">
                        Assignments
                    </Link>
                </div>

            </div>
        )
    }
}

export default StudentProfile