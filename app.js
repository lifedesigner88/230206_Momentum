const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const afterLogin = document.querySelector("#after_login");
const clearStorage = document.querySelector("#clear_storage");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit() {
  localStorage.setItem(USERNAME_KEY, loginInput.value);
}

if (localStorage.getItem(USERNAME_KEY) !== null) {
  greeting.innerText = `${localStorage.getItem(USERNAME_KEY)}`;
  afterLogin.style.visibility = "visible";
  loginForm.style.visibility = "hidden";
}

function onClearStorage() {
  localStorage.clear();
  afterLogin.style.visibility = "hidden";
  loginForm.style.visibility = "visible";
}

loginForm.addEventListener("submit", onLoginSubmit);
clearStorage.addEventListener("click", onClearStorage);
