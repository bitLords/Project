import React, { Component } from 'react'
import home from '../images/home.jpg'

class Landing extends Component {
    render() {
        return (

            <div>
                <img src={home} width="100%" height="20%" alt=""></img>
                <div className="centered">
                <div className="hero-text">
                    <h1 style={{ fontSize: 45 }}>I am John Doe</h1>
                    <p>And I'm a Photographer</p>
                    <button>Hire me</button>
                </div>
                </div>
            </div>

        )
    }
}

export default Landing