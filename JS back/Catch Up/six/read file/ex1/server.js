
const fs = require('fs');
let values=[{
    "name":"dara",
    "age":13
}]
let users =JSON.parse(fs.readFileSync("data.json"));

fs.writeFileSync('data.json',JSON.stringify(values))
console.log(users);