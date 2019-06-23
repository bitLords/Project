const express = require('express');
const router = express.Router();
const stInfo = require('../models/StudentInfo');

router.route('/getAll').get(function(req, res) {
    stInfo.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    stInfo.findById(id, function(err, data) {
        res.json(data);
    });
});

router.route('/update/:id').post(function(req, res) {
    stInfo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("Data is not found");
        else
            
            todo.student_nic = req.body.student_nic;
            todo.student_name = req.body.student_name;            
            todo.student_age = req.body.student_age;
            todo.student_address = req.body.student_address;
            todo.academic_year = req.body.academic_year;
            todo.specialization = req.body.specilaization;
            todo.faculty = req.body.faculty;
            todo.student_gpa = req.body.student_gpa;
            todo.student_contact = req.body.student_contact;
            todo.student_email = req.body.student_email;

        todo.save().then(todo => {
            res.json('Student Info updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.route('/add').post(function(req, res) {
    let newInfoAdd = new stInfo(req.body);
    newInfoAdd.save()
        .then(todo => {
            res.status(200).json({'newInfoAdd': 'Student information added successfully'});
        })
        .catch(err => {
            res.status(400).send('Adding student information failed');
        });
})

router.route('/delete/:id').delete(function(req, res) {
    stInfo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("Data is not found");
        else     

        todo.remove().then(todo => {
            res.json('Student Deleted!');
        })
            .catch(err => {
                res.status(400).send("Delete not possible");
            });
    });
});

module.exports = router;
