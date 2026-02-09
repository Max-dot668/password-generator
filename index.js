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
    const passwordLength = 15;
    let generatedPassword = "";

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
