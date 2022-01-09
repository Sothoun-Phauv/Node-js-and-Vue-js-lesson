const express = require("express");
const{readFileSync} = require('fs');
const app = express();
app.listen(3000);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

let users = JSON.parse(readFileSync('data/data.json'))

console.log(users);

app.get('/users',(req,res)=>{
    res.send(users);
})

app.get('/user_name',(req,res)=>{
    let id = req.query.id;
    let names = null;
    for (let user of users){
        if (user.id === parseInt(id)){
            names = user.name;
        }
    }
    res.send({name:names})
})

app.get('/user_age',(req,res)=>{
    let age = req.query.age;
    let names = null;
    for (let user of users){
        if (user.age === parseInt(age)){
            names = user.name;
        }
    }
    res.send({name:names})
})

