const express = require('express');
const router = express.Router();
const insInfo = require('../models/InstructorInfo');

router.route('/getAll').get(function(req, res) {
    insInfo.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    insInfo.findById(id, function(err, data) {
        res.json(data);
    });
});

router.route('/update/:id').post(function(req, res) {
    insInfo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("Data is not found");
        else
            
            todo.ins_nic = req.body.ins_nic;
            todo.ins_name = req.body.ins_name;            
            todo.ins_age = req.body.ins_age;
            todo.ins_address = req.body.ins_address;
            todo.department = req.body.department;
            todo.faculty = req.body.faculty;
            todo.ins_contact = req.body.ins_contact;
            todo.ins_email = req.body.ins_email;
            todo.ins_tpExt = req.body.ins_tpExt;

        todo.save().then(todo => {
            res.json('Instructor Info updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.route('/add').post(function(req, res) {
    let newInfoAdd = new insInfo(req.body);
    newInfoAdd.save()
        .then(todo => {
            res.status(200).json({'newInfoAdd': 'Instructor information added successfully'});
        })
        .catch(err => {
            res.status(400).send('Adding instructor information failed');
        });
})

router.route('/delete/:id').delete(function(req, res) {
    insInfo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("Data is not found");
        else     

        todo.remove().then(todo => {
            res.json('Instructor Deleted!');
        })
            .catch(err => {
                res.status(400).send("Delete not possible");
            });
    });
});

module.exports = router;
