import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { login } from './UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            stuNumber: '',
            password: '',
            type: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeType = this.onChangeType.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.type);


        const user = {
            stuNumber: this.state.stuNumber,
            password: this.state.password,
            type: this.state.type
        }

        login(user).then(res => {
            if (user.type === "Instructer") {
                if (res) {
                    this.props.history.push('/instructorprofile')
                }
            }
            else if (user.stuNumber === "admin" && user.password === "admin") {
                if (res) {
                    this.props.history.push('/adminprofile')
                }
            }
            else if (user.type === "Student") {
                if (res) {
                    this.props.history.push('/studentprofile')
                }
            }
            else if (user.stuNumber === " " && user.password === " ") {
                console.log("error")
            }

        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="">
                        <div className="row">
                            <div className="col-md-6  mx-auto">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <h1 className="h3 md-6 font-weight-high" style={{ marginBottom: 20 }}>Login</h1>
                                    <div className="form-group">
                                        <label htmlFor="stuNumber">Identification Number</label>
                                        <input type="text"
                                            className="form-control"
                                            name="stuNumber"
                                            placeholder="Enter Identification Number"
                                            value={this.state.stuNumber}
                                            onChange={this.onChange}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter Password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            required />
                                    </div>

                                    <label htmlFor="type">Login as:</label>
                                    <div className="form-group">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input"
                                                type="radio"
                                                name="priorityOptions"
                                                id="priorityLow"
                                                value="Student"
                                                checked={this.state.type === 'Student'}
                                                onChange={this.onChangeType}
                                            />
                                            <label className="form-check-label">Student</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input"
                                                type="radio"
                                                name="priorityOptions"
                                                id="priorityMedium"
                                                value="Instructer"
                                                checked={this.state.type === 'Instructer'}
                                                onChange={this.onChangeType}
                                            />
                                            <label className="form-check-label">Instructor</label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-md btn-success btn-block" >
                                    <i class='fas fa-check-circle'></i> &nbsp; 
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login