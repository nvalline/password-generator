// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password options
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Questions for password options
var questionLength = "Enter the number of characters desired for the password (8 - 128)";
var questionLower = "Do you want lowercase characters? 'OK' for yes, 'Cancel' for no.";
var questionUpper = "Do you want uppercase characters? 'OK' for yes, 'Cancel' for no.";
var questionNum = "Do you want numeric characters? 'OK' for yes, 'Cancel' for no.";
var questionSpecChar = "Do you want special characters? 'OK' for yes, 'Cancel' for no.";

var charLength;
var answerString = "";
var randomized;

// Write password to the #password input
function writePassword() {
  function generatePassword() {

    // conditional for character length
    charLength = prompt(questionLength);

    if (charLength >= 8 && charLength <= 128) {
      charLength;
    } else {
      charLength = prompt(questionLength);
    }

    // console.log(charLength);

    // Validate at least one option is true
    do {
      var answerQuestionLower = confirm(questionLower);
      var answerQuestionUpper = confirm(questionUpper);
      var answerQuestionNum = confirm(questionNum);
      var answerQuestionSpecChar = confirm(questionSpecChar);
    } while (answerQuestionLower !== true && answerQuestionUpper !== true && answerQuestionNum !== true && questionSpecChar !== true);

    // Concat characters
    if (answerQuestionLower) {
      answerString = answerString + alphabetLower;
    }
    if (answerQuestionUpper) {
      answerString = answerString + alphabetUpper;
    }
    if (answerQuestionNum) {
      answerString = answerString + numbers;
    }
    if (answerQuestionSpecChar) {
      answerString = answerString + specialChars;
    }

    // console.log(answerString);

    // Loop for password
    randomized = "";

    for (var i = 0; i < charLength; i++) {
      randomized = randomized + answerString[Math.floor(Math.random() * answerString.length)];
    }
    return randomized;
  }


  console.log(randomized);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
