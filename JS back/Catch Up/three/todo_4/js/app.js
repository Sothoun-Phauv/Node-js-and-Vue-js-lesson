

function display(res){
    console.log(res.data.data);

    const items = res.data.data;
    for (let item of items){

        console.log(item)
        const ul = document.createElement("ul");
        ul.classList.add("list-group");
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        li.classList.add("align-items-center");

        const firstName = document.createElement("span");
        firstName.textContent = item.first_name;
        const lastName = document.createElement("span");
        lastName.textContent = item.last_name;

        const email = document.createElement("span");
        email.textContent = item.email;

        const img = document.createElement("img");
        img.src = item.avatar;
        img.style.width = 40 +"px";

        li.appendChild(firstName);
        li.appendChild(lastName);
        li.appendChild(email);
        li.appendChild(img);

        ul.appendChild(li);

        container.appendChild(ul);
    }
}

let container = document.querySelector(".container");
// URL 
const url = "https://reqres.in/api/users?page=2";



axios
    .get(url)
    .then(display);