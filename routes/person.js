const express = require('express');
const router = express.Router()

// QueryString => query property on the request object
// localhost:3000/person?name=thomas&age=20
router.get('/person', function(req, res, next) {
    if(req.query.name) {
        res.send(`you have requested a person name ${req.query.name}`)
    } else {
        res.send('You have requested a person');
    }
});

// Parans property on the request object
//localhost:3000/person/Fariha
router.get('/person/:name', (req, res, next) => {
    res.send(`you have requested a person name ${req.params.name}`)
})

module.exports = router;
