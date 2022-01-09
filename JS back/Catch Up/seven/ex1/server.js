const express = require("express");

const app = express();

app.listen(3000);
let arr = [
    {id:1,name:"siny",age:10},
    {id:2,name:"student",age:14},
]

app.get('/students',(req,res)=>{
    res.send(arr);
})

// app.get('/student',(req,res)=>{
//     let id = req.query.id;
//     let student={}
//     for (let stu of arr){
//         if (stu.id === parseInt(id)){
//             student = {name:stu.name,age:stu.age};
            
//         }
//     }
//     res.send(student);
// })

// app.get('/student_name',(req,res)=>{
//     let id = req.query.id;
//     let student ="";
//     for (let stu of arr){
//         if (stu.id === parseInt(id)){
//             student=stu.name;
//         }

//     }
//     res.send({name: student});
// })

// app.get('/student_age',(req,res)=>{
//     let id = req.query.id;
//     let student ={};
//     for (let stu of arr){
//         if (stu.id === parseInt(id)){
//             student=stu.age;
//         }

//     }
//     res.send({name:age});
// })

// app.get('/student_id',(req,res)=>{
//     let id = req.query.id;
//     let student ={};
//     for (let stu of arr){
//         if (stu.id === parseInt(id)){
//             student=stu.id;
//         }

//     }
//     res.send({id: id});
// })

// parames id

// app.get('/students/:id',(req,res)=>{
//     let id = req.params.id;
//     let stu={}
//     for (let student of arr){
//         if (student.id===parseInt(id)){
//             stu=student;
//         }
//     }
//     res.send(stu);
// })

app.get('/students/:age',(req,res)=>{
    let age = req.params.age;
    let stu= [];
    for (let student of arr){
        if (student.age===parseInt(age)){
            stu = student.name;
            
        }
    }
    res.send(stu);
})
