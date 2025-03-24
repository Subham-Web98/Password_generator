const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const specialChar = document.getElementById("specialChar");
const numbers = document.getElementById("numbers");
const passRange = document.getElementById("passRange");
const passwordBox = document.querySelector(".password-box");
const generateBtn = document.getElementById("generate-btn");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const specialCharsSet = "!@#$%&*_";
const numbersChars = "1234567890";

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};
const generatePassword = (password = "") => {
  if (upperCase.checked) {
    password += getRandomData(uppercaseChars);
  }
  if (lowerCase.checked) {
    password += getRandomData(lowercaseChars);
  }
  if (specialChar.checked) {
    password += getRandomData(specialCharsSet);
  }
  if (numbers.checked) {
    password += getRandomData(numbersChars);
  }
  if (password.length < passRange.value) {
    return generatePassword(password);
  }
  passwordBox.innerHTML = password.slice(0, passRange.value);
  
};
generateBtn.addEventListener("click", () => {
  generatePassword();
});
