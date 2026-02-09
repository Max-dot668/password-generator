/*
=========================== 
MAIN LOGIC 
===========================
*/
function getPasswords() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

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
function generateRandomPassword(characters) {
    let passwordLength = Number(document.getElementById("passwordlength-el").value);
    let generatedPassword = "";

    if (passwordLength < 1 || isNaN(passwordLength)) {
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

function copyPasswordText(id) {
    const passwordElement = document.getElementById(id);  // Get the element
    const passwordText = passwordElement.textContent;     // Get the text from element

    navigator.clipboard.writeText(passwordText)
        .then(() => {
            const originalText = passwordText;  // passwordText is already a string
            passwordElement.textContent = "Copied!";  // Change the element's text
            setTimeout(() => {
                passwordElement.textContent = originalText;  // Restore original
            }, 1000);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}