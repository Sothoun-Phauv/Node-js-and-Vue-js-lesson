const { readFileSync } = require("fs");
const express = require('express');
const app = express();

app.listen(3000)
// FIRST :  Read users.json file
let users = JSON.parse(readFileSync('users.json'));
// console.log(users);



// Q1 : Display IN THE CONSOLE the name of users  greater than 18
//      Expected result :    [Rady, Ronan]

let result =[];

for (let user of users){
    if (user.age>=18){
        result.push(user.name);
    }
}
console.log(result)

// Q2 : Display IN THE CONSOLE the name of users from FRANCE, with 2 hobbies
//      Expected result :     [Doudou, Clement]
let value = [];
for (let user of users){
   if (user.nationality ==="French"){
    let numObname = user.hobbies.length;
    if (numObname===2){
        value.push(user.name);
    }
   }
}
console.log(value);
// Q3 : Display IN THE CONSOLE the name of users who likes football
//      Expected result :    [Rady, Ronan, Channak, Doudou]
let userlike = [];

for (let user of users){
    for (let result of user.hobbies){
        if (result==="football"){
            userlike.push(user.name);
        }
    }
}
console.log(userlike)