

function displayResult(res){
    console.log(res.data);
    const items = res.data;

    for (let item of items){
        console.log(item);

        const value = document.createElement("div");
        value.classList.add("alert");
        value.classList.add("alert-info");

        const id = document.createElement("strong");
        id.textContent = item.id;

        const firstName = document.createElement("span");
        firstName.textContent = item.firstname;

        const lastName = document.createElement("span");
        lastName.textContent = item.lastname;

        const classB = document.createElement("span");
        classB.textContent = item.classB;

        const img = document.createElement("img");
        img.src = item.profile;

        value.appendChild(id);
        value.appendChild(firstName);
        value.appendChild(lastName);
        value.appendChild(classB);
        value.appendChild(img);

        container.appendChild(value);
    }
}

function displayError(error){
    confirm("cannot found axios");
}


const container =  document.querySelector(".container");

// URL 
const url = "https://finalexamapi.herokuapp.com/api/students/2021b";

axios
    .get(url)
    .then(displayResult)
    .catch(displayError);