// const express = require('express');
// let server = express();
// const PORT_NUM = '3000';
// server.listen(PORT_NUM,(req,res)=>{
//     console.log("server is running on pot:",PORT_NUM);
// })
// const teacherStore={
//     ronan:98,
//     rady:89,
//     him:99
// }
// server.get('/getScore',(req,res)=>{
    
//     let names = req.query.name;
//     let score = teacherStore[names];
//     res.send('teacher '+names +' has score: '+ score);
//     console.log(req,res);
// })

// server.get('/getName',(req,res)=>{
//     res.send('Hello this get name method');
// })



const express = require("express");
const app = express();

const PORT = '3000';
app.listen(PORT, () => {
  console.log(" listening on port  ! " + PORT);
});

//	GET <SERVER IP>: 3000/bobo/baba
app.get('/bobo/baba',(req,res)=>{
  res.send('Bobo and Baba are happy');
})



// TODO : for each kind of request, code the appropriate function to CATCH it and ANSWER it


//		GET <SERVER IP>: 3000
app.get(PORT,(req,res)=>{
    res.send('Hello');
  })
//		GET <SERVER IP>: 3000/weather?address=pnc
const getWeather={
    pnc: 25,
    pnv: 11
}
app.get('/weather',(req,res)=>{
    
    let names = req.query.address;
    let weather = getWeather[names];
    console.log(weather)
    res.send('The weather at '+names +' is: '+ weather);

})

//		GET <SERVER IP>: 3000/teacher/skills?name=rady
const getSkill = {
    rady:'Javascript',
    ronan:'Not found'
}
app.get('/teacher/skills',(req,res)=>{
    
    let names = req.query.name;
    let skill = getSkill[names];
    res.send('he skill of '+names +' is: '+ skill);

})
//		GET <SERVER IP>: 3000/teacher/skills?name=ronan