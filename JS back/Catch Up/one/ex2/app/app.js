
function requestProfile(res){
    let items = res.data;
    console.log(items);
    for (item of items){
        const alerts=document.createElement('div');
        alerts.classList.add('alert');
        alerts.classList.add('alert-danger');

        let id = document.createElement('string');
        id.textContent = item.id;

        let firstName = document.createElement('span');
        firstName.textContent = item.firstname;

        let lastName = document.createElement('span');
        lastName.textContent = item.lastname;

        let classes = document.createElement('span');
        classes.textContent = item.class;

        let profiles = document.createElement('img');
        profiles.src = item.profile;

        alerts.appendChild(id);
        alerts.appendChild(firstName);
        alerts.appendChild(lastName);
        alerts.appendChild(classes);
        alerts.appendChild(profiles);

        container.appendChild(alerts);
    }
}

function requestError(error){
    confirm("cannot found axios");
}

// get URL
const URL="https://finalexamapi.herokuapp.com/api/students/2021a";

let container = document.querySelector(".container");

axios
    .get(URL)
    .then(requestProfile)
    .catch(requestError);
