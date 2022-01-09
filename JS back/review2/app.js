const express = require("express");
const app = express();

 app.listen(process.env.PORT||5000);
 app.use(express.json());
 app.use(express.urlencoded());
 app.use(express.static("public"));


 let users =[
     {id:1, name:"rady", text:"hello world"},
     {id:2, name:"rada", text:"hello what"},
     {id:3, name:"romdule", text:"hello well"},
 ]
 app.get("/users",(req,res)=>{
     res.send(users);
 })

 app.post('/users',(req,res)=>{
     let username = req.body.name;
     let texts = req.body.text;
     let user ={
         id:users.length +1,
         name:username,
         text:texts
     }
     users.push(user);
     res.send(users);
    
 })
