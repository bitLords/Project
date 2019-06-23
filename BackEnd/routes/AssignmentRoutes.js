const express = require('express');
const router = express.Router();
const assignment = require('../models/Assignment');

router.route('/getAll').get(function(req, res) {
    assignment.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    assignment.findById(id, function(err, data) {
        res.json(data);
    });
});

router.route('/update/:id').post(function(req, res) {
    assignment.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("Data is not found");
        else
            todo.course_code = req.body.course_code;
            todo.assignment_id = req.body.assignment_id;
            todo.assignment_name = req.body.assignment_name;
            todo.distributed_date = req.body.distributed_date;
            todo.deadline = req.body.deadline;

        todo.save().then(todo => {
            res.json('Assignment updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.route('/add').post(function(req, res) {
    let newAssignment = new assignment(req.body);
    newAssignment.save()
        .then(todo => {
            res.status(200).json({'newAssignment': 'New Assignment added successfully'});
        })
        .catch(err => {
            res.status(400).send('Adding new Assignment failed');
        });
});

router.route('/delete/:id').delete(function(req, res) {
    assignment.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("Data is not found");
        else     

        todo.remove().then(todo => {
            res.json('Assignment Deleted!');
        })
            .catch(err => {
                res.status(400).send("Delete not possible");
            });
    });
});


module.exports = router;
