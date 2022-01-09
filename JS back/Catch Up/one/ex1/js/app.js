
function requestTeacher(res){
    let teachers=res.data;
    for (let teacher of teachers){
        const alerts = document.createElement('div');
        alerts.classList.add("alert");
        alerts.classList.add("alert-success");
       

        const id = document.createElement('strong');
        id.textContent=teacher.id;

        const firstName= document.createElement('span')
        firstName.textContent=teacher.firstname;

        const lastName= document.createElement('span');
        lastName.textContent=teacher.lastname;

        const positions = document.createElement('span');
        positions.textContent=teacher.position;

        const img = document.createElement('img');
        img.src=teacher.profile;

        alerts.appendChild(id);
        alerts.appendChild(firstName);
        alerts.appendChild(lastName);
        alerts.appendChild(positions);
        alerts.appendChild(img);

        container.appendChild(alerts);
    }
}

function requestError(error){
    confirm('connot request data');
}





const URL="https://finalexamapi.herokuapp.com/api/teachers";
const container=document.querySelector(".container");
axios
    .get(URL)
    .then(requestTeacher)
    .catch(requestError);