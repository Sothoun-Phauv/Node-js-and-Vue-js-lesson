

function displayResult(res){
    console.log(res.data);
    let items = res.data;

    for (let item of items){

        const card = document.createElement("div");
        card.classList.add("card");

        const card_hearder = document.createElement("div");
        card_hearder.classList.add("card-header");
        
        const h3 = document.createElement("h3");
        h3.textContent = item.firstname;

        card_hearder.appendChild(h3)

        const card_body = document.createElement("div");
        card_body.classList.add("card-body");

        const img = document.createElement("img");
        img.src = item.profile;
        img.style.width = 50+"px"

        card_body.appendChild(img);

        const card_footer = document.createElement("div");
        card_footer.classList.add("card-footer");

        const strong = document.createElement("strong");
        strong.textContent = item.lastname;

        const span = document.createElement("span");
        span.textContent = item.class;

        card_footer.appendChild(strong);
        card_footer.appendChild(span);

        card.appendChild(card_hearder);
        card.appendChild(card_body);
        card.appendChild(card_footer);

        container.appendChild(card);
    }
}

const container = document.querySelector(".container")

// URL 
const url = "https://finalexamapi.herokuapp.com/api/students/2021b";

axios
    .get(url)
    .then(displayResult);