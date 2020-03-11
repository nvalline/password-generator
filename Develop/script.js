// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    var pwLength = prompt("Enter the number of characters desired for the password (8 - 128)");

    if (pwLength >= 8 && pwLength <= 128) {
      return pwLength;
    } else {
      pwLength = prompt("Enter the number of characters desired for the password (8 - 128)");
      return pwLength;
    }
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
