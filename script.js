// Question:no:01:
let firstName = prompt("Enter Your First Name.");
let lastName = prompt('Enter Your Last Name.');
let fullName = firstName + "" + lastName;
alert(` WELCOME! ${fullName}`);

// Question:no:02:
let fvrtPhone = prompt("What is your Favourite Mobile Model?");
let length = fvrtPhone.length;
document.write("My Favourite Phone is: " + fvrtPhone + "<br/>");
document.write(" Length of string: " + length + "</br>");

// Question:no:03
let word = 'Pakistan';
let index = word.indexOf('n');
document.write(`String ${word}</br>`);
document.write(`Index of n ${index}`);

// Quetion;no:04:
let greet = 'Hello World';
let Index = greet.indexOf('1');
document.write(`String ${greet}</br>`);
document.write(` last Index of 1:${Index}</br> `);

// Question:no:05:
let chracter = 'Pakistan';
let charAtIndex = word.charAt(3);
document.write(`String ${chracter}</br>`);
document.write(`Character at index 3: ${charAtIndex}</br>`);

// Question:no:06:
let firstNam = prompt("Enter Your First Name");
let lastNam = prompt("Enter Your Last Name");
let fullNam = firstNam.concat(" ", lastNam);
alert(`Hello ${fullNam} Welcome!`);

// Question:no:07:
let word1 = "Hyderabad";
let replace = word1.replace("Hyder", "Islam");
document.write(`City:${word1}</br>`);
document.write(`After Replacement${replace}</br>`);

// Question:no:08:
let message = "Ali and Sami are best friends. They play cricket and football together.";
let updatedMessage = message.replace('/and/g, &');
document.write(`The Perivious message is ${message}</br>`);
document.write(`The updated message is ${updatedMessage}</br>`);

// Question:no:09:
let StringNum = 472;
let convertedNum = Number(StringNum);
document.write(`Value: ${StringNum} </ br> Type: ${typeof StringNum}</br>`);
document.write(`Value: ${convertedNum}</br> ${typeof convertedNum}</br>`);

// Question:no:10:
let user = prompt('Enter Your Favourite Snack.');
let uperCase = user.toUpperCase();
document.write(`User:${user}</br>`);
document.write(`Upper Case:${uperCase}</br>`);

// Question:no:11:
let user2 = prompt('Enter your Fsvourite game');
let titelcase = user2.toLocaleUpperCase();
document.write(`User:${user2}<br/>`);
document.write(`Titel Case:${titelcase}<br/>`);

// Question:no:12:
let num = 35.36;
let numToString = num.toString().replace('.',"");
document.write(numToString);

// Question:no:13:
function isValidUsername(username) {
    const specialSymbols = [33, 44, 46, 64];
    
    for (let i = 0; i < username.length; i++) {
        if (specialSymbols.includes(username.charCodeAt(i))) {
            return false;
        }
    }
    return true;
}

function promptUsername() {
    let username;
    while (true) {
        username = prompt("Enter a username:");
        
        if (isValidUsername(username)) {
            alert(`Username '${username}' is valid and stored.`);
            break;
        } else {
            alert("Invalid username. Please do not use any of these characters: @, ., , !");
        }
    }
}

promptUsername();
// Question:no:14:
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
function searchItem() {
    let userInput = prompt("Enter an item to search:");
    const found = A.some(item => item.toLowerCase() === userInput.toLowerCase());
    if (found) {
        alert(`${userInput} is available in the list.`);
    } else {
        alert(`${userInput} is not available in the list.`);
    }
}
searchItem();
// Question:no:15:
function isValidPassword(password) {
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    if (!isNaN(password.charAt(0))) {
        alert("Password should not start with a number.");
        return false;
    }
    const hasAlphabet = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (!hasAlphabet || !hasNumber) {
        alert("Password must contain both alphabets and numbers.");
        return false;
    }
    return true;
}
function promptPassword() {
    let password;
    while (true) {
        password = prompt("Enter a password:");
        
        if (isValidPassword(password)) {
            alert("Password is valid.");
            break;
        } else {
            alert("Please enter a valid password.");
        }
    }
}
promptPassword();
// Question:no:16:
var university = "University of Karachi";
var universityArray = university.split(" ");
universityArray.forEach(function(element) {
    document.write(element + "<br>");
});
// Question:no:17:
let userInput = prompt("Enter a string:");
if (userInput.length > 0) {
    let lastCharacter = userInput.charAt(userInput.length - 1);
    alert("The last character is: " + lastCharacter);
} else {
    alert("You did not enter any text.");
}
// Question:no:18:
let sentence = "The quick brown fox jumps over the lazy dog";
let lowerCaseSentence = sentence.toLowerCase();
let words = lowerCaseSentence.split(" ");
let count = 0;
words.forEach(word => {
    if (word === "the") {
        count++;
    }
});
alert(`The word "the" appears ${count} times in the sentence.`);
