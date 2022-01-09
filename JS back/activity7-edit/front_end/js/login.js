const LOGIN_ROUTE = "http://localhost:3000/login";

function openApp(event) {
  event.preventDefault();
  localStorage.setItem("username", username.value);
  window.location.href = "message.html";
}

// Main
let loginButton = document.querySelector("#btn");
loginButton.addEventListener("click", openApp);
let username = document.querySelector("#username");
