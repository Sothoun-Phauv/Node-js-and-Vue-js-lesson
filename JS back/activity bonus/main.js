
// 1- Read the number N contained in the file number.txt


// 2- Read the message contained in the file message.txt

// 3- Write N times the message in a new file :   result.txt







// Example : 
// number.txt:	 	3
// message.txt: 	I love potatoes
// result.txt: 		I love potatoes I love potatoes I love potatoes
const myLab = require('fs');

myLab = fs.writeFileSync('test.txt','ronan');
myLab = fs.readFileSync('test.txt').toString();

console.log(myLab);
