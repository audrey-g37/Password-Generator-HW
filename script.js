// Assignment Code
var generateButton = document.querySelector("#generate");
var passwordOutput = document.querySelector("#password");

var invalidMessage = "It appears you have entered an invalid response. ";
var cancelButtonMessage = "See you later!";

var inputLength = 0;
var rightLength = false;

var howManyCharactersMessage =
  "How many characters do you want your newly generated password to have?  Please type a whole number greater than 7 and less than 129.";

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
  '"',
  " ",
];

var inputCharacterTypes = [
  "numbers",
  "lower-case letters",
  "upper-case letters",
  "special characters",
];

var numberInclusion = false;
var lowerCaseInclusion = false;
var upperCaseInclusion = false;
var specialCharacterInclusion = false;

function generatePassword() {
  var CharacterTypesMessage =
    "numbers, lowercase letters, uppercase letters, and special characters.";

  var readyToCreate = confirm(
    "I will be generating a new password for you. You will be asked to type a number of characters, and to confirm what type of characters you want to be included for your new password. When we are finished, your password will be displayed onto the screen.  If you are in a public location and do not wish for your newly generated password to appear on the screen, please return to this page when you are comfortable with the password appearing on the screen. To continue, click 'ok.' If you wish to try later, click 'cancel.'"
  );

  if (readyToCreate === true) {
    inputLength = prompt(howManyCharactersMessage, "Number");
  } else {
    alert(cancelButtonMessage);
    passwordOutput = "";
    return;
  }

  while (rightLength === false) {
    if (inputLength >= 8 && inputLength <= 128 && inputLength % 1 === 0) {
      alert(
        "I see that you want your password to have " +
          inputLength +
          " characters in length.  Click 'ok' to continue."
      );
      rightLength = true;
    } else {
      inputLength = prompt(invalidMessage + howManyCharactersMessage, "Number");
    }
  }
  alert(
    "Please read! After you click 'ok,' you will be asked which character types you want me to include in your newly generated password. There are four possible character types: " +
      CharacterTypesMessage +
      ".\n You will receive a message about each character type (four alerts total).  If you DO want to include that character type, you will click 'ok.'  If you DO NOT want to include that character type, you will click cancel.  \n **PLEASE NOTE: You must include at least one character type, so you must click 'ok' at least once.  You may include more than one character type by clicking 'ok' on more than one of the message alerts."
  );

  function inclusionMessage(characterType, typeIndexNumber) {
    var characterType = confirm(
      "Would you like to include " +
        inputCharacterTypes[typeIndexNumber] +
        " in your newly generated password? If you DO want " +
        inputCharacterTypes[typeIndexNumber] +
        " please click 'ok.'  If you DO NOT want " +
        inputCharacterTypes[typeIndexNumber] +
        " , please click 'cancel.'  Remember, you must include at least one character type in your newly generated password."
    );
    if (characterType === true) {
      alert(
        "I see that you DO want your password to include " +
          inputCharacterTypes[typeIndexNumber] +
          ". Click 'ok' to continue."
      );
      return characterType;
    } else {
      alert(
        "I see that you DO NOT want your password to include " +
          inputCharacterTypes[typeIndexNumber] +
          ". Click 'ok' to continue."
      );
      return characterType;
    }
  }
  function characterInclusion() {
    numberInclusion = inclusionMessage(numberInclusion, 0);
    lowerCaseInclusion = inclusionMessage(lowerCaseInclusion, 1);
    upperCaseInclusion = inclusionMessage(upperCaseInclusion, 2);
    specialCharacterInclusion = inclusionMessage(specialCharacterInclusion, 3);
  }

  characterInclusion();

  while (
    numberInclusion === false &&
    lowerCaseInclusion === false &&
    upperCaseInclusion === false &&
    specialCharacterInclusion === false
  ) {
    alert(invalidMessage);
    characterInclusion();
  }

alert("Your new password has been generated.  Click 'ok' to have your password appear on the screen.  Make sure to record your password and keep it private.")

function () {



};

passwordOutput = newPassword;

}

generateButton.addEventListener("click", generatePassword);
