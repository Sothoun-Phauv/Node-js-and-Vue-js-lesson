const express = require("express");
const app = express();
// 2-  Listen to the port
const SERVER_PORT = 3000;
app.listen(3000, () => console.log("listening on : " + SERVER_PORT));

const STUDENTS_DATA = [
  {
    id: 1,
    name: "lyhor",
    class: "B",
    results: [
      { topic: "javascript", score: 99 },
      { topic: "english", score: 50 },
      { topic: "sport", score: 33 },
    ],
  },
  {
    id: 2,
    name: "Lanh",
    class: "B",
    results: [
      { topic: "javascript", score: 78 },
      { topic: "english", score: 88 },
      { topic: "sport", score: 88 },
    ],
  },
  {
    id: 3,
    name: "Sophorn",
    class: "A",
    results: [
      { topic: "javascript", score: 70 },
      { topic: "english", score: 50 },
      { topic: "sport", score: 70 },
    ],
  },
];

// 3-  Handle request
app.get("/students/:student_id/scores/:topic", (req, res) => {
  let student_id = req.params.student_id;
  let subject = req.params.topic
  let toSend = null;
  for (let student of STUDENTS_DATA) {
    if (student.id === parseInt(student_id)) {
        let students = student.results;
      for (let obj of students){
          if (obj.topic === subject){
            toSend = "The student " + student.name + " got " + obj.score + " on " + obj.topic;
          }
      }
      }
      
    }
  
  if (toSend == null) {
    res.status(400);
    res.send("cannot find the studnet for iD " + student_id);
  } else {
    res.send(toSend);
  }
});


app.get('/scores/topics/:topic',(req,res)=>{
  let subject = req.params.topic;
   
   let result = [];
  for (student of STUDENTS_DATA){
    let students = student.results;
    for (value of students){
      if (value.topic === subject){
        result.push({"name":student.name,"score":value.score})
      }
      
    }
  
  }
  if (result.length ===0){
    res.send("Error cannot found");
  }else{
    res.send(result);
  }
  
})

