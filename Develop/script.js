// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var questionLength = "Enter the number of characters desired for the password (8 - 128)";
var questionLower = "Do you want lowercase characters? 'OK' for yes, 'Cancel' for no.";
var questionUpper = "Do you want uppercase characters? 'OK' for yes, 'Cancel' for no.";
var questionNum = "Do you want numeric characters? 'OK' for yes, 'Cancel' for no.";
var questionSpecChar = "Do you want special characters? 'OK' for yes, 'Cancel' for no.";

// Write password to the #password input
function writePassword() {
  function generatePassword() {

    // conditional for character length
    var charLength = prompt(questionLength);

    if (charLength >= 8 && charLength <= 128) {
      charLength;
    } else {
      charLength = prompt(questionLength);
    }

    // conditional for alphabet lowercase
    prompt(questionLower);

    console.log(charLength);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
