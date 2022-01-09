const express = require('express');
const app = express();
app.listen(3000);
const fs = require('fs');
app.use(express.static('public'));
let users = JSON.parse(fs.readFileSync('data/user.json'));


app.get('/users',(req,res)=>{
    res.send(users);
})

app.get('/user_id',(req,res)=>{
    let id = req.query.id;
    let username = null
    for (let user of users){
        if (user.id ===parseInt(id)){
            username = user.name;
        }
    }
    res.send({name:username});
})


app.get('/user_list',(req,res)=>{
    let min = req.query.min;
    let max = req.query.max;
    let salary = [];
    for (user of users){
        if (user.salary >=min || user.salary <=max){
            salary.push(user.salary);
        }
    }
    res.send({salary:salary});
})