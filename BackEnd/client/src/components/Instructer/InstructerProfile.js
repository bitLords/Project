import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

class InstructerProfile extends Component {
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
                <h2 className="text-left">INSTRUCTOR PROFILE</h2>
                <table className="table ">
                    <tbody>
                        <tr>
                            <td>Instructer No </td>
                            <td>{this.state.stuNumber}</td>
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
            <p className="card-text" style={{ color: "white" }}>You can View Available Courses and details from here.</p>
            <Link to="/instructor/courseList" className="btn btn-primary">
                View Course
            </Link>
        </div>
    </div>
    <div className="card bg-dark">
        <div className="card-body text-left">
            <h4 className="card-title" style={{ color: "white" }}>Student Info</h4>
            <p className="card-text" style={{ color: "white" }}>You can View details of current students from here.</p>
            <Link to="/instructor/studentList" className="btn btn-primary">
                 View Student Info
            </Link>
        </div>
    </div>
    
    <div className="card bg-dark">
        <div className="card-body text-left">
            <h4 className="card-title" style={{ color: "white" }}>Assignments</h4>
            <p className="card-text" style={{ color: "white" }}>You can View distributed assignments  and download student uploads.</p>
            <Link to="/instructor/infoAdd" className="btn btn-primary">
                   Instructor Info
            </Link>
        </div>
    </div>
    <div className="card bg-dark">
        <div className="card-body text-left">
            <h4 className="card-title" style={{ color: "white" }}> Distributions</h4>
            <p className="card-text" style={{ color: "white" }}>You can distribute new assignments from here.</p>
            <Link to="/assignment/list" className="btn btn-primary">
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

export default InstructerProfile