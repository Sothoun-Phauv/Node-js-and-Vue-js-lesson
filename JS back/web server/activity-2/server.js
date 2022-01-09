const express = require("express");
const app = express();

const PORT = '3000';
app.listen(PORT, () => {
  console.log(" listening on port  ! " + PORT);
});
app.get('/getname',(req,res)=>{
  res.send('300/bob/baba');
})

// TODO : for each kind of request, code the appropriate function to CATCH it and ANSWER it

//		GET <SERVER IP>: 3000/bobo/baba
//		GET <SERVER IP>: 3000
//		GET <SERVER IP>: 3000/weather?address=pnc
//		GET <SERVER IP>: 3000/teacher/skills?name=rady
//		GET <SERVER IP>: 3000/teacher/skills?name=ronan




