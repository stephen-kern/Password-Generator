
// Setting up the generate password function with all the possible criteria

function generatePassword() {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var UPPERCASE_Char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase_Char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special_Char = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var passwordString = [];

  // Recieve the user input and validate it
  numberOfChar = prompt("How long would you like the password to be? Password must be 8 - 128 characters.");
  if (numberOfChar < 8 || numberOfChar > 128) {
    return "Invalid. Choose between 8 - 128 characters.";
  } 
  else if (isNaN(numberOfChar)) {
    numberOfChar = prompt("Enter a number between 8 - 128.");
  } 
  else {
    window.alert("Your password will be " + numberOfChar + " characters long.");
  }

  // Confirming what conditions the user would like in the password
  wantsLowerCase = confirm("Would you like lowercase characters?");
  if (wantsLowerCase) {
    window.alert ("Your password will include lower case letters");
  } else {
    window.alert ("Your password will not include lower case letters");
  } 

  wantsUpperCase = confirm("Would you like UPPER CASE characters?");
  if (wantsUpperCase) {
    window.alert("Your password will include UPPER CASE letters");
  } else {
    window.alert("Your password will not include UPPER CASE letters");
  }

  wantsNumbers = confirm("Would you like numbers?");
  if (wantsNumbers) {
    window.alert ("Your password will include numbers"); 
  } else {
    window.alert("Your password will not include numbers");
  }

  wantsSpecial = confirm("Would you like special characters?");
  if (wantsSpecial) {
    window.alert("Your password will include special characters");
  } else {
    window.alert("Your password will not include special characters");
  }

  if (wantsLowerCase === false && wantsUpperCase === false && wantsNumbers === false && wantsSpecial === false) {
    return "Please choose the characters you would like in your password.";
  };

  //join value with string
  if (wantsLowerCase) {
    passwordString = passwordString.concat(lowercase_Char);
  }

  if (wantsUpperCase) {
    passwordString = passwordString.concat(UPPERCASE_Char);
  }

  if (wantsNumbers) {
    passwordString = passwordString.concat(numbers);
  }

  if (wantsSpecial) {
    passwordString = passwordString.concat(special_Char);
  }

  //randomizing the characters for the password
  let userPassword = ""
  for (let i = 0; i < numberOfChar; i++) {
    let rndm =[Math.floor(Math.random() * passwordString.length)];

    userPassword = userPassword + passwordString[rndm];
  }

  return userPassword;

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
