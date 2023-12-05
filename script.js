// Array of special characters to be included in password

var passwordLength = parseInt(prompt("How long do you want your password to be?"))
console.log(passwordLength)


var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var useNumbers = confirm("Do you want to use numbers?")
var usespecialChar = confirm("Do you want to use Special characters?")
var useUpperCasedCharacters = confirm("Do you want to use upper case characters?")
return {useNumbers, usespecialChar, useUpperCasedCharacters}
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomNumber= Math.floor(Math.random() * (arr.length-1));
  return arr[randomNumber]
}
  console.log(password)


// Function to generate password with user input
function generatePassword() {
  var optionsArray =lowerCasedCharacters 
  var userOptions= getPasswordOptions()
  if (userOptions.useNumbers){
    optionsArray = optionsArray.concat(numericCharacters)
  }
  if (userOptions.usespecialChar){
    optionsArray = optionsArray.concat(specialCharacters)
  }
  if (userOptions.useUpperCasedCharacters){
    optionsArray = optionsArray.concat(upperCasedCharacters)
  }
var password = ""
for (let index = 0; index < passwordLength; index++) {
  var randomChar = getRandom(optionsArray)
  password= password+randomChar
  
}
console.log(password)
return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// function generatePassword() {

// function generatePassword() {
//   determineLength();
//   console.log(passwordLength);
//   determineSpecial();
//   console.log(specialCheck);
//   determineNumber();
//   console.log(numberCheck);
//   determinelowercase();
//   console.log(lowercaseCheck);
//   determineuppercase();
//   console.log(uppercaseCheck);
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
 
}

 function resetText() {
document.getElementById("password").value = "Your Secure Password";
 }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Instructions
// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
//     * Length of password
//       * At least 8 characters but no more than 128.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
//   * Code should validate for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// generatePassword(passwordLength)
// writePassword()

//function determineLength() {
  //passwordLength = prompt(
    //"How long do you want your passwrod to be?"
  //);
  //if (passwordLength < 8) {
    //alert("Password length must be at least 8 characters.");
    //determineLength();
  //} else if (passwordLength > 129) {
   // alert("Password length must be less than 129 characters.");
    // determineLength();
  //} else if (isNaN(passwordLength)) {
   // alert("Password length must be a number.");
   // determineLength();
 // } else {
   // alert(
     // "Next, we will determine what types of characters you want to use in your Generated Password."
   // );
  //}
  // return passwordLength;

 // console.log(passwordLength)
//}


