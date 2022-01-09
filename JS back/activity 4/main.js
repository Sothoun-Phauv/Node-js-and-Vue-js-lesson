
// 1- Read the number N contained in the file number.txt
const fs = require('fs');
let number=fs.readFileSync('number.txt').toString();

// 2- Read the message contained in the file message.txt
let newtext=fs.readFileSync('message.txt').toString();


// 3- Write N times the message in a new file :   result.txt
let name = '';
for (i = 0; i<number; i++){
    name += newtext + '\n';
     fs.writeFileSync('result.txt',name);
}



// Example : 
// number.txt:	 	3
// message.txt: 	I love potatoes
// result.txt: 		I love potatoes I love potatoes I love potatoes
