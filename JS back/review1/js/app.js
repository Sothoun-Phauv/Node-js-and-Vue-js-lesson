
// let afterRequest = (response)=>{
//     let users =response.data;
//     for (let user of users){
//         console.log(user.name);
//     }
// }

// let errorAfterRequest =(error)=>console.error("cannot get data")


// // const path="data/user.json";


// const postURL = "https://jsonplaceholder.typicode.com/posts";
// axios.get(path)
//     .then(afterRequest)
//     .catch(error=>console.error(errorAfterRequest));


    let afterRequest = (response)=>{
       let users = response.data;
       for (let user of users){
        //    console.log(user.name);
           console.log(user.address.city);
       }
    }
    
    let errorAfterRequest =(error)=>console.error("cannot get data")
    
    
    // const path="data/user.json";
    
    
    const postURL = "https://jsonplaceholder.typicode.com/users";
    axios.get(postURL)
        .then(afterRequest)
        .catch(error=>console.error(errorAfterRequest));