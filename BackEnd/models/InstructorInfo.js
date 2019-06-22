const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InstructorInfo = new Schema({

    ins_ID: {
        type: String
    },
    ins_nic: {
        type: String
    },
    ins_name: {
        type: String
    },
    ins_age: {
        type: String
    },
    ins_address: {
        type: String
    },  
    department: {
        type: String
    },     
    faculty: {
        type: String
    },    
    ins_contact: {
        type: String
    },
    ins_email: {
        type: String
    },
    ins_tpExt: {
        type: String
    },
    
});

module.exports = mongoose.model('InstructorInfo', InstructorInfo);
