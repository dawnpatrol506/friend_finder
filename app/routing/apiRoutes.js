const express = require('express');
const router = express.Router();

router.get('/friends', (req, res)=>{
    res.send('api');
});

router.post('/', (req, res) =>{
    console.log(req.body);
})


module.exports = router;