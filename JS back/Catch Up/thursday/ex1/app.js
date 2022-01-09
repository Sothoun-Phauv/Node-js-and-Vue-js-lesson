
function displayResult(res){
    console.log(res.data.results);
    let item = res.data.results[0];
    
        const img = document.querySelector('img');
        img.src =item.picture.medium;
        console.log(img);

        let ul = document.querySelector('ul');
        let firstname = document.createElement('li');
        let lastName = document.createElement('li');
        let city = document.createElement('li');
        let descrip = document.createElement('li');
        let email = document.createElement('li');
        
        firstname.textContent = item.name.first;
        lastName.textContent = item.name.last;
        city.textContent = item.location.city;
        email.textContent = item.email
        descrip.textContent = item.location.timezone.description;

        ul.appendChild(firstname);
        ul.appendChild(lastName);
        ul.appendChild(city);
        ul.appendChild(descrip);
        ul.appendChild(email);


    
}


let url = 'https://randomuser.me/api';

axios
    .get(url)
    .then(displayResult);