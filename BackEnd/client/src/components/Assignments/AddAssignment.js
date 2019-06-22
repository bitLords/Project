import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class AddAssignment extends Component {

    constructor(props) {
        super(props);

        this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
        this.onChangeAssignmentId = this.onChangeAssignmentId.bind(this);
        this.onChangeAssignmentName = this.onChangeAssignmentName.bind(this);
        this.onChangeDistributedDate = this.onChangeDistributedDate.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course_code:'',
            assignment_id: '',            
            assignment_name: '',
            distributed_date: '',
            deadline:''            
        }
    }

    onChangeCourseCode(e) {
        this.setState({
            course_code: e.target.value
        });
    }

    onChangeAssignmentId(e) {
        this.setState({
            assignment_id: e.target.value
        });
    }
   
    onChangeAssignmentName(e) {
        this.setState({
            assignment_name:  e.target.value
        });
    }
    onChangeDistributedDate(e) {
        this.setState({
            distributed_date: e.target.value
        });
    }

    onChangeDeadline(e) {
        this.setState({
            deadline: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Priority: ${this.state.course_code}`);
        console.log(`Todo Description: ${this.state.assignment_id}`);
        console.log(`Todo Responsible: ${this.state.assignment_name}`);
        console.log(`Todo Priority: ${this.state.distributed_date}`);
        console.log(`Todo Priority: ${this.state.deadline}`);

        const newAssignment= {

            course_code:this.state.course_code,
            assignment_id: this.state.assignment_id,            
            assignment_name: this.state.assignment_name,
            distributed_date: this.state.distributed_date,
            deadline:this.state.deadline         
            
        };

        axios.post('http://localhost:5000/assignment/add', newAssignment)
            .then(res => console.log(res.data));
        
        this.setState({
            course_code:'',
            assignment_id: '',            
            assignment_name: '',
            distributed_date: '',
            deadline:'' 
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Assignment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Course Code: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.course_code}
                                onChange={this.onChangeCourseCode}
                                />
                    </div>
                    <div className="form-group">
                        <label>Assignment Id: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.assignment_id}
                                onChange={this.onChangeAssignmentId}
                                />
                    </div>
                    <div className="form-group">
                        <label>Assignment Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.assignment_name}
                                onChange={this.onChangeAssignmentName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Distributed Date: </label>
                        <input 
                                type="date" 
                                className="form-control"
                                value={this.state.distributed_date}
                                onChange={this.onChangeDistributedDate}
                                />
                    </div>
                    <div className="form-group">
                        <label>Dealine: </label>
                        <input 
                                type="date" 
                                className="form-control"
                                value={this.state.deadline}
                                onChange={this.onChangeDeadline}
                                />
                    </div>           
                    <div className="form-group" style={{marginTop: 30}}>
                        <input type="submit" value="Create Assignment" className="btn btn-primary" />
                        <Link to="/assignment/list" className="btn btn-primary" style={{marginLeft: 80}} >View Assignments</Link>
                    </div>

                </form>
            </div>
        )
    }
}