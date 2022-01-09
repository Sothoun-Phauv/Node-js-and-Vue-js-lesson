
function displayResult(res){
    console.log(res.data.data);
    const items = res.data.data;

    for (let item of items){
        console.log(item)
        const ul = document.createElement("ul");
        ul.classList.add("list-group");

        const li = document.createElement("li");
        li.classList.add("list-group-item")
        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        li.classList.add("align-items-center")

        const firstName = document.createElement("span");
        const lastName = document.createElement("span");
        const email = document.createElement("span");
        const img = document.createElement("img");
        img.style.width = 50 + "px"

        firstName.textContent = item.first_name;
        lastName.textContent = item.last_name;
        email.textContent = item.email;
        img.src = item.avatar;

        li.appendChild(firstName);
        li.appendChild(lastName);
        li.appendChild(email);
        li.appendChild(img);

        ul.appendChild(li);
        contianer.appendChild(ul);
    }
}

// URL
const URL = "https://reqres.in/api/users?page=1";

const contianer = document.querySelector(".p-4");
axios
    .get(URL)
    .then(displayResult);