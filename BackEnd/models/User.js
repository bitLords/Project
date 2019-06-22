const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    stuNumber:{
        type: String,
       // required: 'Student Number can\'t be empty',
        required: true
    },
    name:{
        type: String,
      //  required: 'Name can\'t be empty'
        required: true
    },
    password:{
        type: String,
      //  required: 'Password can\'t be empty',
       // minlength : [4,'Password must be atleast 4 characters long']
       required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
    
})

module.exports = User = mongoose.model('users', UserSchema)
