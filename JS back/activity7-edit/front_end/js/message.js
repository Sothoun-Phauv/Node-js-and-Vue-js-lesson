const MESSAGES_ROUTE = "http://localhost:3000/messages";

function showMessages(allMessages) {
  message_container.firstElementChild.remove();
  let smallBody = document.createElement("div");
  smallBody.className = "smallBody";

  for (let data of allMessages) {
    let userRight = document.createElement("div");
    userRight.className = "userRight";

    let userLeft = document.createElement("div");
    userLeft.className = "userLeft";

    let label = document.createElement("label");
    let p = document.createElement("p");
    label.textContent = data.name;
    p.textContent = data.text;

    let user = userLeft;
    if (data.name === username_login) {
      user = userRight;
    }

    user.appendChild(label);
    user.appendChild(p);
    smallBody.appendChild(user);
  }
  message_container.appendChild(smallBody);
}

function loadMessages() {
  axios.get(MESSAGES_ROUTE).then((response) => showMessages(response.data));
}

function send_message() {
  let body = { username: username_login, text: message_text.value };
  axios.post(MESSAGES_ROUTE, body);
}

//Main information
let message_container = document.querySelector(".message_container");
let username_login = localStorage.getItem("username");
let password = localStorage.getItem("password");
let message_text = document.querySelector(".word");
let btn_send = document.getElementById("send");
btn_send.addEventListener("click", send_message);

// Refresh
setInterval(loadMessages, 500);

// Log out
function signout() {
  window.location.href = "../index.html";
}
let logOut = document.querySelector("#logOut");
logOut.addEventListener("click", signout);
