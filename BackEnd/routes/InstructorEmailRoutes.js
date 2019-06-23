const express = require('express');
const router = express.Router();
const insInfo = require('../models/InstructorEmail');

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



router.route('/add').post(function(req, res) {
    let newInfoAdd = new insInfo(req.body);
    newInfoAdd.save()
        .then(todo => {
            res.status(200).json({'newInfoAdd': 'New Instructor  added successfully'});
        })
        .catch(err => {
            res.status(400).send('Adding  new instructor failed');
        });
})



module.exports = router;
