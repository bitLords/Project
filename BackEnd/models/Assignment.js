const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Assignment = new Schema({

    course_code: {
        type: String
    },
    assignment_id: {
        type: String
    },
    assignment_name: {
        type: String
    },
    distributed_date: {
        type: String
    },
    deadline: {
        type: String
    },
    
});

module.exports = mongoose.model('Assignment', Assignment);
