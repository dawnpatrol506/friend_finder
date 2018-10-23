const express = require('express');
const router = express.Router();
const fs = require('fs');

let friends = require('../data/friends');

function addToFriends(newFriend, friends){
    friends.push(newFriend);

    const data = 'var friends = ' + JSON.stringify(friends) + '\n module.exports = friends'

    fs.writeFile('./app/data/friends.js', data, err =>{
        if(err){
            console.log(err);
        }
    })
}

function findMatch(newFriend, friends){
    let scoreComparison = 100;
    let closestMatch;

    friends.forEach(friend =>{
        let currentScore = 0;
        for(let i = 0; i < friend.answers.length; i++){
            currentScore += (Math.abs(parseInt(friend.answers[i]) - parseInt(newFriend.answers[i])));
        }
        console.log('Current Score: ' + currentScore);
        if(currentScore < scoreComparison){
            scoreComparison = currentScore;
            closestMatch = friend;
        }
    })

    return closestMatch;
}


router.get('/friends', (req, res) => {
    fs.readFile('./app/data/friends.js', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.send('Someting went wrong, please try again');
        }
        res.send(JSON.stringify(data));
    })
});

router.post('/', (req, res) => {
    req = req.body;
    const newFriend = {
        name: req.name,
        pic: req.pic,
        answers: []
    };

    for(answer in req.q){
        newFriend.answers.push(req.q[answer]);
    }

    console.log(findMatch(newFriend, friends));
    addToFriends(newFriend, friends);

});


module.exports = router;