import React, { Component } from 'react';
import axios from 'axios';

export default class EditCourse extends Component {

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
            course_credit:'',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/course/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    course_code:response.data.course_code,
                    course_name:response.data.course_name,
                    field_study: response.data.field_study,                     
                    available_year:response.data.available_year,                     
                    course_credit:response.data.course_credit,   
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
        const obj = {
            course_code:this.state.course_code,
            course_name: this.state.course_name,            
            field_study: this.state.field_study,
            available_year: this.state.available_year,
            course_credit:this.state.course_credit 
        };
        console.log(obj);
        axios.post('http://localhost:5000/course/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        //Return back to List View
        this.props.history.push('/course/list');
    }



    render() {
        return (
            <div style={{marginTop: 10 , marginLeft:10 , marginRight:10}}>
                <h3 >Update Course</h3>
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
                        <input type="submit" value="Update Course" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }
}
