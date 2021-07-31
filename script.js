// Assignment Code
var generateButton = document.querySelector("#generate");
var passwordOutput = document.querySelector("#password");

var invalidMessage = "It appears you have entered an invalid response. ";
var cancelButtonMessage = "See you later!";

var inputLength = 0;
var rightLength = false;

var howManyCharactersMessage =
  "How many characters do you want your newly generated password to have?  Please type a whole number greater than 7 and less than 129.";

var numberInclusionMessage =
  "Would you like to include numbers in your newly generated password? Please type 'yes' or 'no' in the box below (with no capital letters and without the quotation marks).  Remember, you must type 'yes' to at least one of the character type messages.";
var lowerCaseInclusionMessage =
  "Would you like to include lower-case letters in your newly generated password? Please type 'yes' or 'no' in the box below (without the quotation marks).  Remember, you must type 'yes' to at least one of the character type messages.";
var upperCaseInclusionMessage =
  "Would you like to include upper-case letters in your newly generated password? Please type 'yes' or 'no' in the box below (without the quotation marks).  Remember, you must type 'yes' to at least one of the character-type messages.";
var specialCharacterInclusionMessage =
  "Would you like to include special characters in your newly generated password? Please type 'yes' or 'no' in the box below (without the quotation marks).  Remember, you must type 'yes' to at least one of the character-type messages.";

var CharacterTypesMessage =
  "numbers, lowercase letters, uppercase letters, and special characters.";

var inputCharacterTypes = [
  "numbers",
  "lowercase letters",
  "uppercase letters",
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
  '"',
  " ",
];

function charactersToInclude(
  characterType,
  characterMessage,
  validResponse,
  type
) {
  while (validResponse === false) {
    characterType = prompt(characterMessage);
    if (characterType == "yes") {
      characterType = true;
      alert(
        "I see that you DO want your password to include " +
          inputCharacterTypes[type] +
          ". Click 'ok' to continue."
      );
      validResponse = true;
    } else if (characterType == "no") {
      characterType = false;
      alert(
        "I see that you do NOT want your password to include " +
          inputCharacterTypes[type] +
          ". Click 'ok' to continue."
      );
      validResponse = true;
    } else {
      alert(invalidMessage);
    }
  }
}

function generatePassword() {
  var validNumberInclusionResponse = false;
  var validLowerCaseInclusionResponse = false;
  var validUpperCaseInclusionResponse = false;
  var validSpecialCharacterInclusionResponse = false;

  var numberInclusion = false;
  var lowerCaseInclusion = false;
  var upperCaseInclusion = false;
  var specialCharacterInclusion = false;
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
    } else if (inputLength == null) {
      alert(cancelButtonMessage);
      location.reload();
    } else {
      inputLength = prompt(invalidMessage + howManyCharactersMessage, "Number");
    }
  }
  alert(
    "Please read! After you click 'ok,' you will be asked which character types you want me to include in your newly generated password. There are four possible character types: " +
      CharacterTypesMessage +
      " You will receive a message about each character type.  If you want to include that character type, you will type 'yes' into the box.  If you do NOT want to include that character type, you will type 'no' into the box.  PLEASE NOTE: You must include at least one character type, so you must type 'yes' at least once.  You may include more than one character type by typing 'yes' in more than one of the message boxes."
  );
  charactersToInclude(
    numberInclusion,
    numberInclusionMessage,
    validNumberInclusionResponse,
    0
  );
  charactersToInclude(
    lowerCaseInclusion,
    lowerCaseInclusionMessage,
    validLowerCaseInclusionResponse,
    1
  );
  charactersToInclude(
    upperCaseInclusion,
    upperCaseInclusionMessage,
    validUpperCaseInclusionResponse,
    2
  );
  charactersToInclude(
    specialCharacterInclusion,
    specialCharacterInclusionMessage,
    validSpecialCharacterInclusionResponse,
    3
  );

  console.log(inputLength);
  console.log(numberInclusion);
  console.log(lowerCaseInclusion);
  console.log(upperCaseInclusion);
  console.log(specialCharacterInclusion);
  console.log(validNumberInclusionResponse);

  var createPassword = {
    choiceOfCharacterLength: inputLength,
    choiceOfNumberCharacters: numberInclusion,
    choiceOfLowerCaseInclusion: lowerCaseInclusion,
    choiceOfUpperCaseInclusion: upperCaseInclusion,
    choiceOfSpecialCharacterInclusion: specialCharacterInclusion,
  };
}

function writePassword() {
  var password = generatePassword();

  passwordOutput = password;
}

generateButton.addEventListener("click", writePassword);
