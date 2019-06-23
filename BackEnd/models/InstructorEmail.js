const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddInstructor = new Schema({

    
    userName: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
    
    
});

module.exports = mongoose.model('AddInstructor', AddInstructor);
