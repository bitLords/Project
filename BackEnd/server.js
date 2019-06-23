const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var mongoose = require("mongoose");
var port = process.env.PORT || 5000

// require('./config/config');
// require('./models/db');

app.use(bodyParser.json());
app.use(cors()); 
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27017/LMSprojectDB'

mongoose
    .connect(mongoURI,{useNewUrlParser: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

var Users = require('./routes/Users')
var Courses = require('./routes/CourseRoutes')
var StudentInfo = require('./routes/StudentInfoRoutes')
var InstructorInfo = require('./routes/InstructorInfoRoutes')
var Assignments = require('./routes/AssignmentRoutes')
var InstructorEmail = require('./routes/InstructorEmailRoutes')


app.use('/users', Users)
app.use('/course', Courses)
app.use('/studentInfo', StudentInfo)
app.use('/instructorInfo', InstructorInfo)
app.use('/assignment',Assignments)
app.use('/admin/instructorAdd',InstructorEmail)

app.listen(port, () =>{
    console.log("Server is running on port: "+ port)
})


