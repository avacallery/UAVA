const express = require('express'); 
const {Graduate} = require('../modelsfolder/alumni'); 
const router = express.Router(); 
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const graduates = await Graduate.find().sort('name'); 
    res.send(graduates); 
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let graduate = new Graduate({ name: req.body.name });
    graduate = await graduate.save();
    
    res.send(graduate);
  });


module.exports = router;
