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

                <div className="list-group">
                    <Link to="/course/list" className="btn btn-primary">
                        Courses
                    </Link>
                    <Link to="/admin/instructorsView" className="btn btn-success">
                        Instructers
                    </Link>
                    <Link to="/admin/studentsView" className="btn btn-primary">
                        Students
                    </Link>
                    <Link to="/assignment/list" className="btn btn-success">
                        Assignments
                    </Link>
                </div>

            </div>
        )
    }
}

export default AdminProfile