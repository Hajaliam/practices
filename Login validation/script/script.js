let usernameInput = document.getElementById("username")
let password;

let usernameValidDiv = document.querySelector(".userValidation__valid")
let usernameinValidDiv = document.querySelector(".userValidation__invalid")
let passwordValidDiv = document.querySelector(".passValidation__valid")
let passwordInValidDiv = document.querySelector(".passValidation__invalid")
let isUsernameValid;

usernameInput.addEventListener("keyup" , usernameValidation)

function usernameValidation() {
    username = document.getElementById("username").value
    isUsernameValid = (username.length > 12) ? true : false;
    if (isUsernameValid) {
        usernameinValidDiv.style.display = "none"
        usernameValidDiv.style.display = "block"
    } else {
        usernameValidDiv.style.display = "none"
        usernameinValidDiv.style.display = "block"
    }
}
function passwordValidation() {
    password = String(document.getElementById("password").value)
    let isPassValid = (password.length > 8) ? true : false;
    if (isPassValid) {
        passwordInValidDiv.style.display = "none"
        passwordValidDiv.style.display = "block"
    } else {
        passwordValidDiv.style.display = "none"
        passwordInValidDiv.style.display = "block"
    }
}
function spanDel() {
    usernameValidDiv.style.display = "none"
    usernameinValidDiv.style.display = "none"
    passwordValidDiv.style.display = "none"
    passwordInValidDiv.style.display = "none"

}