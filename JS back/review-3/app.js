const { urlencoded } = require('body-parser');
const express = require('express');
const { env } = require('process');
const app =express();
app.listen(process.env.PORT || 5000,()=>{
    console.log("server running....");
})


app.use(express.json());
app.use(urlencoded());


app.get('/',(req,res)=>{
    res.send("Welcome Get Post and Put Delete");
})

let users =[
    {
        id:1, username:"sothoun", password:"1234"
    },
    {id:2, username:"somoun", password:"2341"
    },
    {id:4, username:"thunder", password:"2223"}
]
app.get('/api/users',(req,res)=>{
    res.send(users);
})


//post

app.post("/api/users",(req,res)=>{
    console.log(req.body.username);
    if (!req.body.password){
        res.status(400);
        return res.send({error:"password require"});
    }
    let user={
        id:users.length+1,
        username:req.body.username,
        password:req.body.password

    }
    users.push(user);
    res.send(users);
})

// put

app.put("/api/users/:id",(req,res)=>{
    let id = req.params.id;
    let userName = req.body.username;
    let pass = req.body.password;
    let index = -1;
    for (let user of users){
        if (user.id ===parseInt(id)){
            index=user.id -1;
        }

    }
    if (index>=0){
        let user = users[index];
        user.username = userName;
        user.password = pass;
        res.send(user);
        console.log(user);
    }else{
        res.status(404);
        res.send({error:"user id not correct"});
    }
})

/// delete //
app.delete("/api/users/:id",(req,res)=>{
    let id = req.params.id;
    let index = -1;
    for (let user of users){
        if (user.id ===parseInt(id)){
            index=user.id -1;
        }

    }
    if (index>=0){
        let user = users[index];
        users.slice(index,1);
        res.send(user);
        console.log(user);
    }else{
        res.status(404);
        res.send({error:"user id not correct"});
    }

})