const { static } = require('express');
const express = require('express');
const app = express();
const {readFileSync} = require('fs');

app.listen(5000);
app.use(express.static('public'));
// app.use(static.url)

let users = JSON.parse(readFileSync('data/data.json'));
console.log(users);

app.get('/users',(req,res)=>{
    res.send(users);
})

app.get('/user_name',(req,res)=>{
    let id = req.query.id;
    console.log(id);
    let User=null;
    for (let user of users){
        if (user.id===parseInt(id)){
            User=user.name;
        }
    }
    res.send({name:User});
})

app.get('/user_age',(req,res)=>{
    let age = req.query.age;
    let ages = null;
    for(let user of users){
        if (user.age===parseInt(age)){
            ages=user.age;
        }
    }
    res.send({age:ages})
})

