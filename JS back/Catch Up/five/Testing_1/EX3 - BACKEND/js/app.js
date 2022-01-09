/**
 * @description https://finalexamapi.herokuapp.com open this link on browser and user axios to request data to display on browser
 * we have 3 paths but you need to choose 1 for your exercise
 * @result Looking on instruction.gif to see the result clear.In example I use path api/teachers but you can use other.
 */

function displayResult(res){
    console.log(res.data);
    const items = res.data;
    for (let item of items){
        const card = document.createElement("div");
        card.classList.add("card");

        const profile = document.createElement("div");
        profile.classList.add("profile");

        const img = document.createElement("img");
        img.src = item.profile;

        profile.appendChild(img);

        const text = document.createElement("div");
        text.classList.add("text");

        const names = document.createElement("div");
        names.classList.add("names");

        const firstName = document.createElement("span");
        firstName.textContent = item.firstname;

        const lastName = document.createElement("span");
        lastName.textContent = item.lastname;

        names.appendChild(firstName);
        names.appendChild(lastName);

        text.appendChild(names);

        const title = document.createElement("div");
        title.classList.add("title");

        const p = document.createElement('p');
        p.textContent = item.position;

        title.appendChild(p);
        text.appendChild(title);

        const personerId = document.createElement("div");
        personerId.classList.add("personalId");

        const id = document.createElement("sapn");
        id.textContent = item.id;

        personerId.appendChild(id);

        text.appendChild(personerId);

        card.appendChild(profile);
        card.appendChild(text);


        container.appendChild(card)

    }
}

const container = document.querySelector('.container');


 const url = "https://finalexamapi.herokuapp.com/api/teachers"

 axios
    .get(url)
    .then(displayResult);
