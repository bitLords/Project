const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentInfo = new Schema({

    student_ID: {
        type: String
    },
    student_nic: {
        type: String
    },
    student_name: {
        type: String
    },
    student_age: {
        type: String
    },
    student_address: {
        type: String
    },   
    academic_year: {
        type: String
    },
    specialization: {
        type: String
    },
    faculty: {
        type: String
    },
    student_gpa: {
        type: String
    },
    student_contact: {
        type: String
    },
    student_email: {
        type: String
    },
    
});

module.exports = mongoose.model('StudentInfo', StudentInfo);
