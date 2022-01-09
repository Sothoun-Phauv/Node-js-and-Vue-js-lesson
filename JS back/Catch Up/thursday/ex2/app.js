const {readFileSync} = require('fs');

let users = JSON.parse(readFileSync('user.json'));


// let result = [];
// for (let user of users){
//     if (user.age>=20){
//         result.push(user.name);
        
//     }
    
// }


let names = [];
for (let user of users){
    let favo = user.favorie;
    for (value of favo){
        if (value === "Reading"){
            names.push(user.name);
        }
    }
    
}
console.log(names);


// let username = []

// for (let user of users){
//     let numObname = user.favorie.length;
//     if (numObname=== 2 || numObname=== 3){
//         username.push(user.name)

//     }
// }
// console.log(username);