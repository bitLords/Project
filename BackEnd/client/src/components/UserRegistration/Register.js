import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            stuNumber: '',
            name: '',
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            stuNumber: this.state.stuNumber,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        console.log(this.state.email);
        if(user.stuNumber=== "" || user.password === "" ||  user.name === ""|| user.email=== "" ){
            console.log("plese fill all the forms!");
        }else
        register(user).then(res => {
            this.props.history.push('/login')
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
                                    <h1 className="h3 mb-3 font-weight-high">Please sign in</h1>
                                    <div className="form-group">
                                        <label htmlFor="stuNumber">Identification Number</label>
                                        <input type="text"
                                            className="form-control"
                                            name="stuNumber"
                                            placeholder="Enter Identification Number"
                                            value={this.state.stuNumber}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Enter Name"
                                            value={this.state.name}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={this.state.email}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter Password"
                                            value={this.state.password}
                                            onChange={this.onChange} />
                                    </div>
                                    <button type="submit" className="btn btn-md btn-success btn-block" style={{ marginTop: 30 }}>
                                    <i class='fas fa-edit'></i> &nbsp; 
                                        Register
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

export default Register