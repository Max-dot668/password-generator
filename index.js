/*
=========================== 
GLOBAL VARIABLES
===========================
*/
const btnToggleNumbersEl = document.getElementById("btnToggleNumbers");
const btnToggleSymbolsEl = document.getElementById("btnToggleSymbols");

let btnToggleNumber = false;
let btnToggleSymbol = false;

/*
=========================== 
EVENT LISTENERS
===========================
*/
btnToggleNumbersEl.addEventListener("change", toggleNumberBtn);
btnToggleSymbolsEl.addEventListener("change", toggleSymbolBtn);

/*
=========================== 
MAIN LOGIC 
===========================
*/
function getPasswords() {
    const characters = getCharList(btnToggleNumber, btnToggleSymbol);

    let passwords = [];
    passwords.push(generateRandomPassword(characters));
    passwords.push(generateRandomPassword(characters));

    displayGeneratedPasswords(passwords);
}

/*
=========================== 
HELPER FUNCTIONS 
===========================
*/
function getCharList(btnToggleNumber, btnToggleSymbol) {
    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
        "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
        "s","t","u","v","w","x","y","z"];

    if (btnToggleNumber === true && btnToggleSymbol === true) {
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
        "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/");
    }
    else if (btnToggleNumber === true && btnToggleSymbol === false) {
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
    else if (btnToggleNumber === false && btnToggleSymbol === true) {
        characters.push("~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/")
    }
    return characters
}

function generateRandomPassword(characters) {
    let passwordLength = Number(document.getElementById("passwordlength-el").value);
    let generatedPassword = "";

    if (passwordLength < 1 || isNaN(passwordLength) || passwordLength > 22) {
        passwordLength = 15;
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }
    return generatedPassword;
}

function displayGeneratedPasswords(passwords) {
    let password1El = document.getElementById("password1-el");
    let password2El = document.getElementById("password2-el");

    password1El.textContent = passwords[0];
    password2El.textContent = passwords[1];
}

/*
=========================== 
BONUS FUNCTIONS 
===========================
*/
function copyPasswordText(id) {
    const passwordElement = document.getElementById(id);  
    const passwordText = passwordElement.textContent;     

    navigator.clipboard.writeText(passwordText)
        .then(() => {
            const originalText = passwordText;  
            passwordElement.textContent = "Copied!";  
            setTimeout(() => {
                passwordElement.textContent = originalText;  
            }, 1000);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

function toggleNumberBtn() { btnToggleNumber = btnToggleNumber ? false : true; }
function toggleSymbolBtn() { btnToggleSymbol = btnToggleSymbol ? false : true; }