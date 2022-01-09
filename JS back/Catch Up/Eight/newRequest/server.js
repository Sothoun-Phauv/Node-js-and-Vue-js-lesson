const {readFileSync} = require('fs');
const express = require('express');
const { query } = require('express');
const app = express();

app.listen(3000)

let users = JSON.parse(readFileSync('users.json'));


app.get('/users',(req,res)=>{
    res.send(users);
})

app.get('/user',(req,res)=>{
    let id = req.query.id;
    let obj = null
    for (let user of users){
        if (user.id === parseInt(id)){
            obj = user;
        }
    }
    res.send(obj);
})

app.get('/user_name',(req,res)=>{
    let username = req.query.name;
    let obj = null
    for (user of users){
        if (user.name===username){
            
            obj = (user.name);
            console.log(obj);
        }
    }
    res.send({name:obj});
})

app.get('/user_age',(req,res)=>{
    let age = req.query.age;
    let ages = null
    console.log(age);
    for (let user of users){
        if (user.age === parseInt(age)){
            console.log('hello');
            ages = user.age;
        }
    }
    res.send({age:ages});

}
)

app.get('/user_info',(req,res)=>{
    let username = req.query.name;
    let age = req.query.age;
   let obj = null
    for (let user of users){
        if(user.name===username || user.age===parseInt(age)){
            obj = user.id;
        }
    }
    res.send({id:obj})
})

