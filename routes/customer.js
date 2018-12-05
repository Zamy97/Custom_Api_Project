const customerModel = require('../models/customer.model');
const express = require('express');
const router = express.Router();

// Create a new customer
//POST localhost:3000/customer
router.post('/customer', (req, res) => {
    if(!req.body) {
        return res.status(400).send("Request body missing")
    }
    // const user = {
    //     name: 'firstname lastname',
    //     email: email@gmail.com
    // }
    const model = new customerModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status.send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router
