var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  function generatePassword(){
    //creating an empty string to store the random characters
    var randomPass = "";
    var conditionCount = 0; // count variable to keep track of allowed condition;
    // creating a var to store data about my characters
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}",";",":","|",",",".","<",">","?","~"];
    var randomArr = []; //array to hold the characters allowed by the user

    // prompting the user for the length of the password
    const passwordLen = parseInt(prompt("Please enter your password length :\nmust be between 8 to 128 character",0));

    // using the conditional statement to ensure that user pick the right password length.
    if(passwordLen > 128){
      alert("The password length you chose is more than 128 characters");
      return;
    }else if(passwordLen < 8){
      alert("The password length you chose is less than 8 characters");
      return;
    }

    //asking the user for the password requirements
    var isNumber = confirm("Do you want to add numbers to your password ?");
    var isLowercase = confirm("Do you want to include lowecase characters ?");
    var isUppercase = confirm("Do you want to include uppercase characters ?");
    var isSpecialChar = confirm("Do you want to include special characters ?");

    //making sure that the user select at least one of the condition
    if(!isNumber && !isLowercase && !isUppercase && !isSpecialChar){ 
      alert("You must select at least one of the condition(s)");
    }

    //randomArr is an array containing characters selected by the user, we are adding appropriate 
    //characters using if statements.
    if(isNumber){
      randomArr = randomArr.concat(numbers);
    }
    if(isLowercase){
      randomArr = randomArr.concat(lowercase);
    }
    if(isUppercase){
      randomArr = randomArr.concat(uppercase);
    }
    if(isSpecialChar){
      randomArr =  randomArr.concat(specialChar);
    }

    //loop to generate password
    for(var i = 0;i<passwordLen;i++){
      let j = Math.floor(Math.random()*randomArr.length);
      randomPass += randomArr[j];
    }
    return randomPass;
  };
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
