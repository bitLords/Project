import React, { Component } from 'react';
import axios from 'axios';

export default class EditAssignment extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
        this.onChangeAssignmentId = this.onChangeAssignmentId.bind(this);
        this.onChangeAssignmentName = this.onChangeAssignmentName.bind(this);
        this.onChangeDistributedDate = this.onChangeDistributedDate.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onSubmit = this.onSubmit.bind(this);;


        this.state = {
            course_code:'',
            assignment_id: '',            
            assignment_name: '',
            distributed_date: '',
            deadline:''  
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/assignment/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    course_code:response.data.course_code,
                    assignment_id:response.data.assignment_id,
                    assignment_name: response.data.assignment_name,                     
                    distributed_date:response.data.distributed_date,                     
                    deadline:response.data.deadline,   
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            course_code:this.state.course_code,
            assignment_id: this.state.assignment_id,            
            assignment_name: this.state.assignment_name,
            distributed_date: this.state.distributed_date,
            deadline:this.state.deadline
        };
        console.log(obj);
        axios.post('http://localhost:5000/assignment/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        //Return back to List View
        this.props.history.push('/assignment/list');
    }



    render() {
        return (
            <div style={{marginTop: 10 , marginLeft:10 , marginRight:10}}>
                <h3 >Update Assignment</h3>
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
                    <div className="form-group">
                        <input type="submit" value="Update Assignment" className="btn btn-primary" />
                    </div>

                </form>
            </div>

        )
    }
}
