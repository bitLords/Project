import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        axios.get('http://localhost:5000/studentInfo/'+this.props.match.params.id)
            .then(response => {
                this.setState({             
                  

                    student_ID:response.data.student_ID,
                    student_nic:response.data.student_nic,
                    student_name:response.data.student_name,
                    student_age:response.data.student_age ,
                    student_address:response.data.student_address,   
                    academic_year: response.data.academic_year,
                    specialization:response.data.specialization ,
                    faculty:response.data.faculty,
                    student_gpa:response.data.student_gpa ,
                    student_contact: response.data.student_contact,
                    student_email:response.data.student_email , 
                })
            })
            .catch(function (error) {
                console.log(error);
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
