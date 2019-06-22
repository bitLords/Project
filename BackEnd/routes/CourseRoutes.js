const express = require('express');
const router = express.Router();
const course = require('../models/Course');

router.route('/getAll').get(function(req, res) {
    course.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    course.findById(id, function(err, data) {
        res.json(data);
    });
});

router.route('/update/:id').post(function(req, res) {
    course.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("Data is not found");
        else
            todo.course_code = req.body.course_code;
            todo.course_name = req.body.course_name;
            todo.field_study = req.body.field_study;
            todo.available_year = req.body.available_year;
            todo.course_credit = req.body.course_credit;

        todo.save().then(todo => {
            res.json('Course updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.route('/add').post(function(req, res) {
    let newCourse = new course(req.body);
    newCourse.save()
        .then(todo => {
            res.status(200).json({'newCourse': 'New Course added successfully'});
        })
        .catch(err => {
            res.status(400).send('Adding new Course failed');
        });
})

router.route('/delete/:id').delete(function(req, res) {
    course.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("Data is not found");
        else     

        todo.delete().then(todo => {
            res.json('Course Deleted!');
        })
            .catch(err => {
                res.status(400).send("Delete not possible");
            });
    });
});

module.exports = router;
