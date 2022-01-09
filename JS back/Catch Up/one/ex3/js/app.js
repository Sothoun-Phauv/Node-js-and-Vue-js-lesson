
function requestData(res){
    const datas = res.data;
    for (let item of datas){
        
        let alerts = document.createElement("div");
        alerts.classList.add("alert");
        alerts.classList.add("alert-primary");

        let id=document.createElement("sting");
        id.textContent = item.id;

        let firstName = document.createElement('span');
        firstName.textContent = item.firstname;

        let lastName = document.createElement('span');
        lastName.textContent = item.lastname;

        let classes = document.createElement('span');
        classes.textContent = item.class;

        let img = document.createElement('img');
        img.src = item.profile;

        alerts.appendChild(id);
        alerts.appendChild(firstName);
        alerts.appendChild(lastName);
        alerts.appendChild(classes);
        alerts.appendChild(img);

        container.appendChild(alerts);
    }
}


function requesError(error){
    confirm("cannot found axios");
}
// get URL

let container= document.querySelector(".container");

const URL="https://finalexamapi.herokuapp.com/api/students/2021b";
axios
    .get(URL)
    .then(requestData)
    .catch(requesError);