const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readFile('./app/public/home.html', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.send('Something went wrong, try again.');
        }

        res.send(data);
    });
});

router.get('/survey', (req, res) => {
    res.send('survey');
});

router.get('*', (req, res) => {
    fs.readFile('./app/public/home.html', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.send('Something went wrong, try again.');
        }

        res.send(data);
    });
});


module.exports = router;