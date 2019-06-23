import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import axios from 'axios';


export default class StudentInfoView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            student_ID:'' ,
            student_nic:'' ,
            student_name:'' ,
            student_age:'' ,
            student_address: '',   
            academic_year: '',
            specialization:'' ,
            faculty:'',
            student_gpa:'' ,
            student_contact: '',
            student_email:'' ,  
           
        }
    }

    //To get data From BE
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            student_ID: decoded.student_ID,
            student_nic: decoded.student_nic,
            student_name: decoded.student_name,
            student_age: decoded.student_age,
            student_address: decoded.student_address,
            academic_year: decoded.academic_year,
            specialization: decoded.specialization,
            faculty: decoded.faculty,
            student_gpa: decoded.student_gpa,
            student_contact: decoded.student_contact,
            student_email: decoded.student_email,

        })
    }

    render() {
        return (
            <div>
                <h3>Student Profile Info...</h3>
                <div class="panel panel-info">
                    <div class="panel-heading">Profile Info</div>
                    <div class="panel-body">
                        <p>ID : {this.state.student_ID}</p><br/>
                        <p>NIC : {this.state.student_nic}</p><br/>
                        <p>Name : {this.state.student_name}</p><br/>
                        <p>Age : {this.state.student_age}</p><br/>
                        <p>Address : {this.state.student_address}</p><br/>
                        <p>Year : {this.state.academic_year}</p><br/>
                        <p>Specialization : {this.state.specialization}</p><br/>                        
                        <p>Faculty : {this.state.faculty}</p><br/>
                        <p>GPA : {this.state.student_gpa}</p><br/>
                        <p>Contact : {this.state.ins_contact}</p><br/>
                        <p>Email : {this.state.ins_email}</p><br/>
                       
                    </div>
                </div>
            </div>
        )
    }
}
