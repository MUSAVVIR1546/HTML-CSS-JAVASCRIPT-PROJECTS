const passwordBox = document.getElementById("password");
const passButton = document.getElementById('generate-password');
const copyPass = document.getElementById('copyPass');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

copyPass.addEventListener('click', copyPassword);
passButton.addEventListener('click', createPassword);

function createPassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * number.length)];
    password += upperCase[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}