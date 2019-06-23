import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = props => (
    <tr>
        <td>{props.course.course_code}</td>
        <td>{props.course.course_name}</td>
        <td>{props.course.field_study}</td>
        <td>{props.course.available_year}</td>
        <td>{props.course.course_credit}</td>
        <td>
            <Link to={"/course/edit/"+props.course._id} className="btn btn-primary" >Edit</Link>
        </td>
        <td>
            <Link to={"/course/delete/"+props.course._id} className="btn btn-danger" onClick={ListCourse.deleteCourse}>Delete</Link>
        </td>
    </tr>
)

export default class ListCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {courses: []};
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    //To get data From BE
    componentDidMount() {
        axios.get('http://localhost:5000/course/getAll')
            .then(response => {
                this.setState({ courses: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    //For instant Refresh after update
    componentDidUpdate() {
        axios.get('http://localhost:5000/course/getAll'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    
                    course_code:response.course.course_code,
                    course_name:response.course.course_name,
                    field_study: response.course.field_study,                     
                    available_year:response.course.available_year,                     
                    course_credit:response.course.course_credit,       
                   
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //To traverse all books
    courseList() {
        return this.state.courses.map(function(currentCourse, i){
            return <Course course={currentCourse} key={i} />;
        })
    }

    deleteCourse(){
        axios.get('http://localhost:5000/course/delete/'+this.props.match.params.id)   
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
                <h3>Course List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Field of Study</th>
                        <th>Distributed Year</th>
                        <th>Credit Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.courseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
