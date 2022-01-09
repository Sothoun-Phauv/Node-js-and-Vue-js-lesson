const IP = "192.168.43.239";
const PORT = 3000;
const GET_LOGIN_REQUEST = "http://" + IP + ":" + PORT + "/login";

function login(e) {
  e.preventDefault();

  // 1- Create the REQUEST

  let querry = GET_LOGIN_REQUEST + "?name=" + userName.value + "&password=" + password.value;
  console.log(querry);

  axios.post(querry,{name:userName,password:password}).then((response) => {
    let isValid = response.data;
    let text = "not vlaid";
    let color = "red";

    // TODO
    if (isValid) {
      color = "green";
      text = "Login success!";
    }
    message.textContent = text;
    message.style.color = color;
  });
}

const message = document.querySelector("#message");
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

btn.addEventListener("click", login);
