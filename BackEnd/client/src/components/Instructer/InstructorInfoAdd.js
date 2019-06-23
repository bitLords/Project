import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class InstructorInfoAdd extends Component {

    constructor(props) {
        super(props);

        this.onChangeInsID = this.onChangeInsID.bind(this);
        this.onChangeInsNic = this.onChangeInsNic.bind(this);
        this.onChangeInsName = this.onChangeInsName.bind(this);
        this.onChangeInsAge = this.onChangeInsAge.bind(this);
        this.onChangeInsAddress = this.onChangeInsAddress.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeFaculty = this.onChangeFaculty.bind(this);
        this.onChangeInsContact = this.onChangeInsContact.bind(this);
        this.onChangeInsEmail = this.onChangeInsEmail.bind(this);
        this.onChangeTPExt = this.onChangeTPExt.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

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

    onChangeInsID(e) {
        this.setState({
            ins_ID: e.target.value
        });
    }

    onChangeInsNic(e) {
        this.setState({
            ins_nic: e.target.value
        });
    }
   
    onChangeInsName(e) {
        this.setState({
            ins_name:  e.target.value
        });
    }
    onChangeInsAge(e) {
        this.setState({
            ins_age: e.target.value
        });
    }

    onChangeInsAddress(e) {
        this.setState({
            ins_address: e.target.value
        });
    }

    onChangeDepartment(e) {
        this.setState({
            department: e.target.value
        });
    }
    onChangeFaculty(e) {
        this.setState({
             faculty: e.target.value
        });
    }
    onChangeInsContact(e) {
        this.setState({
            ins_contact : e.target.value
        });
    }
    onChangeInsEmail(e) {
        this.setState({
            ins_email: e.target.value
        });
    }
    onChangeTPExt(e) {
        this.setState({
            ins_tpExt : e.target.value
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

        axios.post('http://localhost:5000/instructorInfo/add', newInfo)
            .then(res => console.log(res.data));

        window.location.assign("http://localhost:3000/instructor/infoView"+this.props.match.params.ins_ID);

        {/*this.props.target('/instructorInfo/infoView/'+this.props.match.params.ins_ID);*/}
        
        this.setState({
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
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Manage Your Profile Data...</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Instrutor ID: </label>
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
                        <label>Department: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.department}
                                onChange={this.onChangeDepartment}
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
                        <label>Contact: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ins_contact}
                                onChange={this.onChangeInsContact}
                                />
                    </div>  
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ins_email}
                                onChange={this.onChangeInsEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tp Ext: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ins_tpExt}
                                onChange={this.onChangeTPExt}
                                />
                    </div> 
                    <div className="form-group"> 
                        <input type="submit" value="Add Info" className="btn btn-primary" /> &nbsp;                    
                      {/*  <Link to={"/instructor/infoView"+this.state.ins_ID} className="btn btn-info" >View Profile</Link>*/}
                    </div>        
                    
                   
                </form>
            </div>
        )
    }
}