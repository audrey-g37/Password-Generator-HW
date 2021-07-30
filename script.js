// Assignment Code
var generateButton = document.querySelector("#generate");

var inputLength = 0;
var rightLength = false;

var numberInclusion = false;
var lowerCaseInclusion = false;
var upperCaseInclusion = false;
var specialCharacterInclusion = false;

var inputCharacterType = [
  "numbers",
  "lowercase",
  "uppercase",
  "special characters",
];
var possibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var possibleLowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var possibleUpperCaseLetters = possibleLowerCaseLetters.map(function (i) {
  return i.toUpperCase();
});

var possibleSpecialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var createPassword = {
  characterLength: inputLength,
  characterType: inputCharacterType,
  generatePassword: function () {
    var readyToCreate = confirm(
      "You will be generating a new password. You will be asked to type the number of characters and they type of characters you want for your new password. When we are finished, your password will be displayed onto the screen.  If you are in a public location and do not wish for your password to appear on the screen, please return to this page when you are comfortable with the password appearing on the screen. To continue, click 'ok.' If you wish to try later, click 'cancel.'"
    );

    if (readyToCreate === true) {
      var inputLength = prompt(
        "How many characters do you want your new password to have?  Please type a whole number greater than 7 and less than 129.",
        "Number"
      );
    } else {
      window.alert("See you later!");
      return;
    }
    while (rightLength === false) {
      if (inputLength >= 8 && inputLength <= 128 && inputLength % 1 === 0) {
        window.alert(
          "I see that you want your password to have " +
            inputLength +
            " characters in length.  Click 'ok' to continue."
        );
        rightLength = true;
      } else {
        inputLength = prompt(
          "It appear you entered an invalid response.  How many characters do you want your new password to have?  Please type a whole number greater than 7 and less than 129.",
          "Number"
        );
      }
    }
  },
};

// Write password to the #password input
function writePassword() {
  var password = createPassword.generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
