const BASE_URL = "http://localhost:3000/";


function getUserById(){
    let id = document.querySelector("#userid").value;
   
    let url = BASE_URL + "user_name?id=" +id;
    axios
        .get(url)
        .then(res=>{
            
            let user = res.data;
            if (user.name !== null){
                names.textContent = "User name is: "+user.name;
                names.classList.remove("text-danger");

            }else{
                names.textContent = "No user not found";
                names.classList.add('text-danger');
            }

        })
}


// use age
function getUserByeAge(){
    let age = document.querySelector("#userid").value;
   
    let url = BASE_URL + "user_age?age=" +age;
    axios
        .get(url)
        .then(res=>{
            
            let user = res.data;
            if (user.name !== null){
                names.textContent = "User name is: "+ user.name;
                names.classList.remove("text-success");

            }else{
                names.textContent = "No user not found";
                names.classList.add('text-success');
            }

        })
}


let names = document.querySelector("#name");
const btngetuser = document.querySelector('#byid');
btngetuser.addEventListener('click',getUserById);


const btnAge = document.querySelector('#byAge');
btnAge.addEventListener('click',getUserByeAge);