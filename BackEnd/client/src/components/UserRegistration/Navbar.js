import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link" className="btn btn-success btn-outline-success" style={{ marginRight: 30 }}>
                     <i class='fas fa-sign-in-alt'></i>
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link" className="btn btn-success btn-outline-success" style={{ marginRight: 10 }}>
                    <i class='fas fa-address-book'></i>
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav navbar-pills">
                <li className="nav-item">
                    <Link to="/instructorprofile" className="btn btn-success btn-outline-success" style={{ marginRight: 30 }}>
                      <i class='fas fa-user	'></i>
                        User
                    </Link>
                </li>
                <li className="nav-item justify-content-md-right" >
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link" className="btn btn-danger btn-outline-danger" style={{ marginRight: 10 }}>
                    <i class='fas fa-sign-out-alt'></i> 
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler active"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-left" id="navbar1">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <Link to="/" className="btn btn-info btn-outline-info">
                                LMS Application
                            </Link>
                        </li>
                    </ul>
                </div>
                {localStorage.usertoken ? userLink : loginRegLink}

            </nav>
        )
    }
}

export default withRouter(Navbar)