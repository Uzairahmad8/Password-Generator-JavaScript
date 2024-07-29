(function() {
  const elements = {
    numbers: "1234567890",
    specialLetters: "!@#$%^&*()_+~`|}{[]:;?><,/-=",
    lowerCaseLetters: "abcdefghijklmnopqrstuvwxyz",
    upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbolsCheckbox: document.querySelector("#symbols"),
    numbersCheckbox: document.querySelector("#numbers"),
    lowerCaseCheckbox: document.querySelector("#lowercase"),
    upperCaseCheckbox: document.querySelector("#uppercase"),
    passwordLengthSlider: document.querySelector("#password-length"),
    passwordLenghtText: document.querySelector(".length-text"),
    passwordFieldOutput: document.querySelector(".password-field__output"),
    passwordGenerateButton: document.querySelector(".password-generate-button"),
    passwordFieldCopyButton: document.querySelector(".password-field__copy-button"),
  }
  
  elements.passwordLenghtText.innerText = elements.passwordLengthSlider.value;
  
  elements.passwordLengthSlider.addEventListener("input", function() {
    elements.passwordLenghtText.innerText = elements.passwordLengthSlider.value;
  })
  
  elements.passwordGenerateButton.addEventListener("click", function(e) {
      e.preventDefault();
      elements.passwordFieldOutput.value = generatePassword();
  })
  
  elements.passwordFieldCopyButton.addEventListener("click", function(e) {
      e.preventDefault();
      copyPassword(elements.passwordFieldOutput);
  })
  
  window.addEventListener("blur", () => {
      this.document.title = "Come back to secure yourself :(";
  })
  
  window.addEventListener("focus", () => {
      this.document.title = "Password Generator";
  })
  
  function generatePassword() {
  
    let sampleSpace = "";
    sampleSpace += elements.upperCaseCheckbox.checked ? elements.upperCaseLetters : "";
    sampleSpace += elements.lowerCaseCheckbox.checked ? elements.lowerCaseLetters : "";
    sampleSpace += elements.numbersCheckbox.checked ? elements.numbers : "";
    sampleSpace += elements.symbolsCheckbox.checked ? elements.specialLetters : "";
  
    if (sampleSpace.length === 0) {
        alert("Please select at least one character type.");
        return;
    }
  
    let password = "";
    for (let i = 0; i < elements.passwordLengthSlider.value; i++) {
      const randomIndex = Math.floor(Math.random() * sampleSpace.length);
      password += sampleSpace.charAt(randomIndex);
    }
    return password;
  }
  
  function copyPassword(passwordField) {
    
    if (passwordField.value === "") {
        alert("There's nothing to copy :(");
        return;
    }
  
    const password = passwordField.value;
    navigator.clipboard.writeText(password);
    passwordField.value = "Password Copied";
    
    setTimeout(() => {
      passwordField.value = password;
    }, 500);
  }
})();