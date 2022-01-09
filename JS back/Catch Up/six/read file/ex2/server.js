

// const {readFileSync,
// writeFileSync,
// appendFileSync
// } = require("fs");

// let arr=[
//     { name:"roda", age:23},
//     { name:"somoun", age:43},
// ]
// writeFileSync('users.json',JSON.stringify(arr));
// // appendFileSync('users.json', JSON.stringify(arr));

// let users = JSON.parse(readFileSync('users.json'));

// console.log(users);

const { json } = require('body-parser');
const express = require('express');
const app = express();
const {readFileSync} = require("fs");
const PORT = 3000;
app.listen(PORT,()=>console.log("server running..."));

let users = JSON.parse(readFileSync('users.json'))

app.get('/',(req,res)=>{
    res.send('Welcome Node JS');
})

app.get('/users',(req,res)=>{
    res.send(users);
})