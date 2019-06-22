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
        <td>{props.student. faculty}</td> 
        <td>{props.student.student_gpa}</td>
        <td>{props.student.student_contact}</td>
        <td>{props.student.student_email}</td>               
        <td>
            <Link to={"/edit/"+props.student._id} class="btn btn-primary disabled" >Edit</Link>
        </td>
    </tr>
)

export default class InstructorStudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {students: []};
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
                     
                    student_ID:response.student.student_ID ,
                    student_nic:response.student.student_nic ,
                    student_name:response.student.student_name ,
                    student_age:response.student.student_age ,
                    student_address: response.student.student_address,   
                    academic_year: response.student.academic_year,
                    specialization:response.student.specialization ,
                    faculty:response.student.faculty ,
                    student_gpa:response.student.student_gpa ,
                    student_contact: response.student.student_contact,
                    student_email:response.student.student_email ,  
                   
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //To traverse all students
    studentList() {
        return this.state.students.map(function(currentStudent, i){
            return <Student student={currentStudent} key={i} />;
        })
    }


    render() {
        return (
            <div>
                <h3>Student List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>NIC</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Year</th>
                        <th>Specialization</th>
                        <th>Faculty</th>
                        <th>GPA</th>
                        <th>Phone</th>
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
