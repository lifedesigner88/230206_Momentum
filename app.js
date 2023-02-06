const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(){
    localStorage.setItem(USERNAME_KEY,loginInput.value);
}

if(localStorage.getItem(USERNAME_KEY) !== null){

    greeting.innerText = `Hello ${localStorage.getItem(USERNAME_KEY)} welcome`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
} else {
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
