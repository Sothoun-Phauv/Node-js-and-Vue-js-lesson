// NOTE : this api always change the data when you refresh  !

const URL = "https://randomuser.me/api/";

// Q1 : link the HTML elements to the related information from the API :
// we use script to link to html
//          (check the  example  : result.png)
// Title
// First name
// Last name
// Gender
// Country
// Email
// description
function displayResult(res){
    console.log(res.data.results);
    let item = res.data.results[0];

    let ul = document.querySelector('ul');
    let contain = document.createElement('li');

    let img = document.querySelector('img');
    let title = document.createElement('span');
    let firstName = document.createElement('span');
    let lastName = document.createElement('span');
    let gender = document.createElement('li');
    let city = document.createElement('li');
    let country = document.createElement('li');
    
    let email = document.createElement('li');
    let des = document.createElement('li');

    img.src=item.picture.medium;
    title.textContent = item.name.title;
    firstName.textContent = item.name.first;
    lastName.textContent = item.name.last;
    gender.textContent = item.gender;
    city.textContent = item.location.city;
    country.textContent = item.location.country
    email.textContent = item.email;
    des.textContent = item.location.timezone.description;


    contain.appendChild(title);
    contain.appendChild(firstName);
    contain.appendChild(lastName);
    ul.appendChild(contain);
    ul.appendChild(gender);
    ul.appendChild(city);
    ul.appendChild(email);
    ul.appendChild(country);
    ul.appendChild(des);


}



axios
    .get(URL)
    .then(displayResult)


