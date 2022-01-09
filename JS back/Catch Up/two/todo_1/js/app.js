
function doThisone(res){
    const values=res.data;
    for (let value of values){
        console.log(value)
        const contain = document.createElement('div');
        contain.classList.add("alert");
        contain.classList.add("alert-danger");

        const id = document.createElement("strong");
        id.textContent = value.id;

        const firstName = document.createElement('span');
        firstName.textContent = value.firstname;

        const lastName = document.createElement("span");
        lastName.textContent = value.lastname;

        const classA = document.createElement("span");
        classA.textContent = value.class;

        const img = document.createElement("img");
        img.src = value.profile;

        contain.appendChild(id);
        contain.appendChild(firstName);
        contain.appendChild(firstName);
        contain.appendChild(classA);
        contain.appendChild(img);

        container.appendChild(contain);
        
    }
    


}

// URL 
const url = "https://finalexamapi.herokuapp.com/api/students/2021a";

const container = document.querySelector(".container");

axios
    .get(url)
    .then(doThisone);
