const express = require('express');
const router = express.Router();

router.get('/friends', (req, res)=>{
    res.send('api');
});

router.post('/', (req, res) =>{
    res.send('api post');
})


module.exports = router;