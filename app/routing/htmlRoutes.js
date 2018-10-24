const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

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
        res.render('survey', {matchName: '', src: ''});
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