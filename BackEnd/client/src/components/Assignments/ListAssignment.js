import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Assignment = props => (
    <tr>
        <td>{props.assignment.course_code}</td>
        <td>{props.assignment.assignment_id}</td>
        <td>{props.assignment.assignment_name}</td>
        <td>{props.assignment.distributed_date}</td>
        <td>{props.assignment.deadline}</td>
        <td>
            <Link to={"/edit/"+props.assignment._id} className="btn btn-primary" >Edit</Link>
        </td>
    </tr>
)

export default class ListAssignment extends Component {

    constructor(props) {
        super(props);
        this.state = {assignments: []};
    }

    //To get data From BE
    componentDidMount() {
        axios.get('http://localhost:5000/assignment/getAll')
            .then(response => {
                this.setState({ assignments: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    //For instant Refresh after update
    componentDidUpdate() {
        axios.get('http://localhost:5000/assignment/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    
                    course_code:response.assignment.course_code,
                    assignment_id:response.assignment.assignment_id,
                    assignment_name: response.assignment.assignment_name,                     
                    distributed_date:response.assignment.distributed_date,                     
                    deadline:response.assignment.deadline,       
                   
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //To traverse all books
    assignmentList() {
        return this.state.assignments.map(function(currentAssignment, i){
            return <Assignment assignment={currentAssignment} key={i} />;
        })
    }


    render() {
        return (
            <div>
                <h3 style={{marginTop: 30}}>Assignments</h3>

                <div className="form-group" style={{marginTop: 20}}>
                    <Link to="/assignment/add" className="btn btn-primary" >Add Assignments</Link>
                </div>

                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Distributed Date</th>
                        <th>Deadline</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.assignmentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
