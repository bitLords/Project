import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
    <tr>
        <td>{props.student.student_ID}</td>
        <td>{props.student.student_nic}</td>
        <td>{props.student.student_name}</td>
        <td>{props.student.student_age}</td>
        <td>{props.student.student_address}</td>
        <td>{props.student.academic_year}</td>
        <td>{props.student.specialization}</td>
        <td>{props.student.faculty}</td>
        <td>{props.student.student_gpa}</td>
        <td>{props.student.student_contact}</td>
        <td>{props.student.student_email}</td>
        <td>
            <Link to={"/studentInfo/edit/"+props.student._id} className="btn btn-primary disabled" >Edit</Link>
        </td>
        <td>
            <Link to={"/student/delete/"+props.student._id} className="btn btn-danger" onClick={ViewStudents.deleteStudent}>Delete</Link>
        </td>
    </tr>
)

export default class ViewStudents extends Component {

    constructor(props) {
        super(props);
        this.state = {students: []};
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    //To get data From BE
    componentDidMount() {
        axios.get('http://localhost:5000/studentInfo/getAll')
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    //For instant Refresh after update
    componentDidUpdate() {
        axios.get('http://localhost:5000/studentInfo/getAll'+this.props.match.params.id)
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

    //To traverse all books
    studentList() {
        return this.state.students.map(function(currentSt, i){
            return <Student student={currentSt} key={i} />;
        })
    }

    deleteStudent(){
        axios.get('http://localhost:5000/studentInfo/delete/'+this.props.match.params.id)   
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
                <h3>Student List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NIC</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Year</th>
                        <th>specialization</th>
                        <th>Faculty</th>
                        <th>Gpa</th>
                        <th>Contact</th>
                        <th>Email</th>
                                             
                    </tr>
                    </thead>
                    <tbody>
                    { this.studentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
