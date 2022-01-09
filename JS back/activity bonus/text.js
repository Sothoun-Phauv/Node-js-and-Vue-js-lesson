


// 1- Import the module ‘fs’   (file system) to read and write files
const myLab = require('fs');
let text = 'Him is the best for font end programner'

// 2 - Write  a file rady.txt  with the content : Him is the best front programmer
myLab.writeFileSync('rady.txt',text);
// 3 - Read the content of the file  rady.txt
let newtext = myLab.readFileSync('rady.txt').toString();
// 4 - Add to this content ‘But Ronan is the funniest’ and write again our file

newtext += ', But Ronan is the funniest'
myLab.writeFileSync('rady.txt',newtext);
console.log(newtext);
