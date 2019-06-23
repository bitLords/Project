import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class StudentInfoAdd extends Component {

    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeNic = this.onChangeNic.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);  
        this.onChangeYear = this.onChangeYear.bind(this); 
        this.onChangeSpecialization = this.onChangeSpecialization.bind(this);       
        this.onChangeFaculty = this.onChangeFaculty.bind(this);
        this.onChangeGpa = this.onChangeGpa.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

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

    onChangeID(e) {
        this.setState({
            student_ID: e.target.value
        });
    }

    onChangeNic(e) {
        this.setState({
            student_nic: e.target.value
        });
    }
   
    onChangeName(e) {
        this.setState({
            student_name:  e.target.value
        });
    }
    onChangeAge(e) {
        this.setState({
        student_age: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            student_address: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            academic_year: e.target.value
        });
    }
    onChangeSpecialization(e) {
        this.setState({
            specialization: e.target.value
        });
    }
    onChangeFaculty(e) {
        this.setState({
             faculty: e.target.value
        });
    }
    onChangeGpa(e) {
        this.setState({
            student_gpa : e.target.value
        });
    }
    onChangeContact(e) {
        this.setState({
            student_contact : e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            student_email: e.target.value
        });
    }
    

    onSubmit(e) {
        e.preventDefault();
        
      
        const newInfo = {

            ins_ID: this.state.ins_ID,
            ins_nic:this.state.ins_nic ,
            ins_name:this.state.ins_name ,
            ins_age:this.state.ins_age ,
            ins_address: this.state.ins_address,  
            department: this.state.department,     
            faculty: this.state.faculty,    
            ins_contact:this.state.ins_contact,
            ins_email: this.state.ins_email,
            ins_tpExt:this.state.ins_tpExt ,           
            
        };

        axios.post('http://localhost:5000/studentInfo/add', newInfo)
            .then(res => console.log(res.data));
        
        this.setState({
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
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Manage Your Profile Data...</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Student ID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ins_ID}
                                onChange={this.onChangeInsID}
                                />
                    </div>
                    <div className="form-group">
                        <label>NIC: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ins_nic}
                                onChange={this.onChangeInsNic}
                                />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ins_name}
                                onChange={this.onChangeInsName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ins_age}
                                onChange={this.onChangeInsAge}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ins_address}
                                onChange={this.onChangeInsAddress}
                                />
                    </div> 
                    <div className="form-group">
                        <label>Year: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.academic_year}
                                onChange={this.onChangeYear}
                                />
                    </div> 
                    <div className="form-group">
                        <label>Specialization: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.specialization}
                                onChange={this.onChangeSpecialization}
                                />
                    </div> 
                    <div className="form-group">
                        <label>Faculty: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.faculty}
                                onChange={this.onChangeFaculty}
                                />
                    </div> 
                    <div className="form-group">
                        <label>GPA: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.student_gpa}
                                onChange={this.onChangeGpa}
                                />
                    </div>  
                    <div className="form-group">
                        <label>Contact: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.student_contact}
                                onChange={this.onChangeContact}
                                />
                    </div>  
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.student_email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                     
                    <div className="form-group"> 
                        <input type="submit" value="Add Info" className="btn btn-primary" />&nbsp;                       
                        <Link to={"/student/infoView"+this.state.student_ID} className="btn btn-info" >View Profile</Link>
                    </div>        
                   
                   
                </form>
            </div>
        )
    }
}