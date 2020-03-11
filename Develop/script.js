// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var question1 = "Enter the number of characters desired for the password (8 - 128)";
var question2 = "Do you want lowercase characters? 'OK' for yes, 'Cancel' for no.";
var question3 = "Do you want uppercase characters? 'OK' for yes, 'Cancel' for no.";
var question4 = "Do you want numeric characters? 'OK' for yes, 'Cancel' for no.";
var question5 = "Do you want special characters? 'OK' for yes, 'Cancel' for no.";

// Write password to the #password input
function writePassword() {
  function generatePassword() {

    // conditional for character length
    var charLength = prompt(question1);

    if (charLength >= 8 && charLength <= 128) {
      charLength;
    } else {
      charLength = prompt(question1);
    }

    // conditional for alphabet lowercase
    prompt(question2);

    console.log(charLength);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
