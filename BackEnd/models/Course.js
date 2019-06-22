const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Course = new Schema({

    course_code: {
        type: String
    },
    course_name: {
        type: String
    },
    field_study: {
        type: String
    },
    available_year: {
        type: String
    },
    course_credit: {
        type: String
    },
    
});

module.exports = mongoose.model('Course', Course);
