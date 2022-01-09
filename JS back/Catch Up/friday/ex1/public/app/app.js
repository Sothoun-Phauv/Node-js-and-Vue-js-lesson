function getName(){
    const id = document.querySelector('#id').value;
    const url='http://localhost:3000/user_id?id=' + id;
    axios
        .get(url)
        .then(res=>{
            let name = res.data.name;
            if (name!==null){
                result.textContent ="username: "+ name;
                result.classList.remove('text-danger');

            }
            else{
                result.textContent = "Name not found";
                result.classList.add('text-danger');
            }
        })
}

let result = document.querySelector('#result');
const betname = document.querySelector('button');
betname.addEventListener('click',getName);