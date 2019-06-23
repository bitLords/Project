import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Instructor = props => (
    <tr>
        <td>{props.instructor.ins_ID}</td>
        <td>{props.instructor.ins_nic}</td>
        <td>{props.instructor.ins_name}</td>
        <td>{props.instructor.ins_age}</td>
        <td>{props.instructor.ins_address}</td>
        <td>{props.instructor.department}</td>
        <td>{props.instructor.faculty}</td>
        <td>{props.instructor.ins_contact}</td>
        <td>{props.instructor.ins_email}</td>
        <td>{props.instructor.ins_tpExt}</td>
        <td>
            <Link to={"/instructorInfo/edit/"+props.instructor._id} className="btn btn-primary disabled" >Edit</Link>
        </td>
        <td>
            <Link  className="btn btn-danger disabled" onClick={ViewInstructors.deleteInstructor}>Delete</Link>
        </td>
    </tr>
)

export default class ViewInstructors extends Component {

    constructor(props) {
        super(props);
        this.state = {instructors: []};
        this.deleteInstructor = this.deleteInstructor.bind(this);
    }

    //To get data From BE
    componentDidMount() {
        axios.get('http://localhost:5000/instructorInfo/getAll')
            .then(response => {
                this.setState({ instructors: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    //For instant Refresh after update
    componentDidUpdate() {
        axios.get('http://localhost:5000/instructorInfo/getAll'+this.props.match.params.id)
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

    //To traverse all books
    instructorList() {
        return this.state.instructors.map(function(currentIns, i){
            return <Instructor instructor={currentIns} key={i} />;
        })
    }

    deleteInstructor(){
        axios.get('http://localhost:5000/instructorInfo/delete/'+this.props.match.params.id)   
           .then(data=> {
               console.log('Deleted')
            })         
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3>Instructor List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NIC</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Faculty</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Tp Extention</th>                        
                    </tr>
                    </thead>
                    <tbody>
                    { this.instructorList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
