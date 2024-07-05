
const inputSlider = document.querySelector(".input-slider")
const passSizeContainer = document.querySelector(".length-container");
const outputContainer = document.querySelector("#password");
const generatePassword = document.querySelector("#generateBtn")
const copyBtn = document.querySelector("#copyBtn");

const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const allNumbers = "1234567890"
const specialLetters = "!@#$%^&*()_+~`|}{[]:;?><,/-="


passSizeContainer.innerText = inputSlider.value;

inputSlider.addEventListener("input", function() {
    passSizeContainer.innerText = inputSlider.value;
})

generatePassword.addEventListener("click", function(e) {
    e.preventDefault();

    let allChars = ""

    if (upperCase.checked) allChars += upperCaseLetters;
    if (lowerCase.checked) allChars += lowerCaseLetters;
    if (numbers.checked) allChars += allNumbers;
    if (symbols.checked) allChars += specialLetters;

    // now allChars will cantain all the interested characters. 
    // e.g: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" ( user wants to add the uppercase letters and numbers only )

    // now to generate password from the characters which user want to add in their password;
    let password = "";
    for (let i = 0; i < inputSlider.value; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    } 

    // show password 
    outputContainer.value = password;
})

copyBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (outputContainer.value === "") {
        alert("There's nothing to copy :(");
        return;
    }

    navigator.clipboard.writeText(outputContainer.value);
    outputContainer.value = "Password Copied";

    setTimeout(() => {
        outputContainer.value = "";
    }, 500);

})



window.addEventListener("blur", () => {
    this.document.title = "Come back to secure yourself :("
})

window.addEventListener("focus", () => {
    this.document.title = "Password Generator";
})