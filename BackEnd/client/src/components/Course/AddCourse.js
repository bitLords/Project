import React, { Component } from 'react';
import axios from 'axios';

export default class AddCourse extends Component {

    constructor(props) {
        super(props);

        this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeFieldOfStudy = this.onChangeFieldOfStudy.bind(this);
        this.onChangeAvailableYear = this.onChangeAvailableYear.bind(this);
        this.onChangeCourseCredits = this.onChangeCourseCredits.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course_code:'',
            course_name: '',            
            field_study: '',
            available_year: '',
            course_credit:''            
        }
    }

    onChangeCourseCode(e) {
        this.setState({
            course_code: e.target.value
        });
    }

    onChangeCourseName(e) {
        this.setState({
            course_name: e.target.value
        });
    }
   
    onChangeFieldOfStudy(e) {
        this.setState({
            field_study:  e.target.value
        });
    }
    onChangeAvailableYear(e) {
        this.setState({
            available_year: e.target.value
        });
    }

    onChangeCourseCredits(e) {
        this.setState({
            course_credit: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Priority: ${this.state.course_code}`);
        console.log(`Todo Description: ${this.state.course_name}`);
        console.log(`Todo Responsible: ${this.state.field_study}`);
        console.log(`Todo Priority: ${this.state.available_year}`);
        console.log(`Todo Priority: ${this.state.course_credit}`);

        const newCourse = {

            course_code:this.state.course_code,
            course_name: this.state.course_name,            
            field_study: this.state.field_study,
            available_year: this.state.available_year,
            course_credit:this.state.course_credit         
            
        };

        axios.post('http://localhost:5000/course/add', newCourse)
            .then(res => console.log(res.data));
        
        this.setState({
            course_code:'',
            course_name: '',            
            field_study: '',
            available_year: '',
            course_credit:'' 
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Course</h3>
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
                        <label>Course Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.course_name}
                                onChange={this.onChangeCourseName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Field of Study: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.field_study}
                                onChange={this.onChangeFieldOfStudy}
                                />
                    </div>
                    <div className="form-group">
                        <label>Distributed Year of Academic: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.available_year}
                                onChange={this.onChangeAvailableYear}
                                />
                    </div>
                    <div className="form-group">
                        <label>Credit Amount: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.course_credit}
                                onChange={this.onChangeCourseCredits}
                                />
                    </div>           
                    <div className="form-group">
                        <input type="submit" value="Create Course" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}