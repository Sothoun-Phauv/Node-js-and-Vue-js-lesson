
function displayResult(res){
    console.log(res.data.data);
    const items = res.data.data;
    for (let item of items){
        console.log(item);

        let contain = document.createElement("div");
        contain.classList.add("alert");
        contain.classList.add("alert-danger");

        const id = document.createElement("strong");
        id.textContent = item.id;

        const  email = document.createElement("h3");
        email.textContent = item.email;

        const firstName = document.createElement("h3");
        firstName.textContent = item.first_name;

        const lastName = document.createElement("h3");
        lastName.textContent = item.last_name;

        const img = document.createElement("img");
        img.src = item.avatar;

        contain.appendChild(id);
        contain.appendChild(email);
        contain.appendChild(firstName);
        contain.appendChild(lastName);
        contain.appendChild(img);

        container.appendChild(contain);
    }
}

// URL 
const url = "https://reqres.in/api/users?page=2";
let container = document.querySelector(".container")

axios
    .get(url)
    .then(displayResult);