
const BASE_URL = 'http://localhost:5000/';



function getUsername(){
    
    let studentId = document.querySelector('#valueid').value;
    const url = BASE_URL+'user_name?id='+ studentId;
    console.log(studentId);
    axios
        .get(url)
        .then(res=>{
            let username = res.data.name;
            if(username !== null){
                result.textContent = username;
                result.remove('text-danger')
            }else{
                result.textContent = "Result not found";
                result.classList.add('text-danger')
            }
        })
}


function getUserage(){
    
    let studentId = document.querySelector('#valueid').value;
    const url = BASE_URL+'user_name?id='+ studentId;
    console.log(studentId);
    axios
        .get(url)
        .then(res=>{
            let userage= res.data.age;
            if(username !== null){
                result.textContent = userage;
                result.remove('text-danger')
            }else{
                result.textContent = "Result not found";
                result.classList.add('text-danger')
            }
        })
}


let result = document.querySelector('#name');

const getName = document.querySelector('#getName');
getName.addEventListener('click',getUsername);

const getAge = document.querySelector('#getAge');
getName.addEventListener('click',getUserage)