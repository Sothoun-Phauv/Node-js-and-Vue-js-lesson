const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT,()=>{
    console.log('listen is '+PORT);
});

const STUDENTS = [ "Phally", "Sinai", "Siny", "Channary",]



// 1- Serve the /public folder to serve the FRONT-END code
app.use(express.static('public'));

// 2-  On GET /students/   : return the list of students
app.get('/public',(req,res)=>{
    res.send(STUDENTS);
})
