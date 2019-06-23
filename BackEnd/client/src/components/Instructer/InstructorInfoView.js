import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class InstructorInfoView extends Component {

    constructor(props) {
        super(props);
        
       
        this.state = {
            ins_ID: '',
            ins_nic:'' ,
            ins_name:'' ,
            ins_age:'' ,
            ins_address: '',  
            department: '',     
            faculty: '',    
            ins_contact:'',
            ins_email: '',
            ins_tpExt:'' , 
        }
    }

    //To get data From BE
    componentDidMount() {
        axios.get('http://localhost:5000/instructorInfo/'+this.props.match.params.id)
            .then(response => {
                this.setState({                 
                    
                    ins_ID: response.data.ins_ID,
                    ins_nic:response.data.ins_nic ,
                    ins_name:response.data.ins_name ,
                    ins_age:response.data.ins_age ,
                    ins_address: response.data.ins_address,  
                    department: response.data.department,     
                    faculty: response.data.faculty,    
                    ins_contact:response.data.ins_contact,
                    ins_email: response.data.ins_email,
                    ins_tpExt:response.data.ins_tpExt , 
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }    

    render() {
        return (
            <div>
                <h3>Instructor Profile Info...</h3>
                <div class="panel panel-info">
                    <div class="panel-heading">Profile Info</div>
                    <div class="panel-body">
                        <p>ID : {this.state.ins_ID}</p><br/>
                        <p>NIC : {this.state.ins_nic}</p><br/>
                        <p>Name : {this.state.ins_name}</p><br/>
                        <p>Age : {this.state.ins_age}</p><br/>
                        <p>Address : {this.state.ins_address}</p><br/>
                        <p>Department : {this.state.department}</p><br/>
                        <p>Faculty : {this.state.faculty}</p><br/>
                        <p>Contact : {this.state.ins_contact}</p><br/>
                        <p>Email : {this.state.ins_email}</p><br/>
                        <p>Tp Extension : {this.state.ins_tpExt}</p><br/>
                    </div>
                </div>
            </div>
        )
    }
}
