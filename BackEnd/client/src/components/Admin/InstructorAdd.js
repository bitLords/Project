import React, { Component } from 'react';
import axios from 'axios';
var nodemailer = require('nodemailer');

transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'senali1996wijesekera@gmail.com',
      pass: 'dsw15730SLIIT'
    }
  });

   mailOptions = {
    from: 'senali1996wijesekera@gmail.com',
    to: 'wijesekeradilanka@gmail.com',
    subject: 'New Instructor Login',
    text: `UserName : {} , Password:{}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

export default class InstructorAdd extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName:'',
            password: '',            
            email: '',
                        
        }
    }

  
    onChangeUsername(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
   
    onChangeEmail(e) {
        this.setState({
            email:  e.target.value
        });
    }
   

    onSubmit(e) {
        e.preventDefault();       
        

        const newIns= {

            userName:this.state.userName,
            password: this.state.password,            
            email: this.state.email,
                    
            
        };

        axios.post('http://localhost:5000/admin/instructorAdd/add', newIns)
            .then(res => console.log(res.data));
        
        this.setState({
            userName:'',
            password: '',            
            email: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Instructor</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>UserName: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.userName}
                                onChange={this.onChangeUsername}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                         
                    <div className="form-group" style={{marginTop: 30}}>
                        <input type="submit" value="Add Instructor" className="btn btn-primary" />
                        
                    </div>

                </form>
            </div>
        )
    }
}