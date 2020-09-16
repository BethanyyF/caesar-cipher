const alphabet = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','Q','R',
    'S','T','U','V','W','X',
    'Y','Z'
];


function buttons() {
    let plaintext = document.getElementById("plaintext").value;     //User input
    let cleanPlaintext = (plaintext.trim()).toLowerCase();          //Clean user input
    let encrypt = document.getElementById("encrypt");               //Encode radio button
    let shift = document.getElementById("shift").value;             //Shift/Key amount
  
    returnValue = '';                                               //Default return value

    //Check if Encrypt is pressed
    if (encrypt.checked) {

        for (var i = 0; i < cleanPlaintext.length; i++) {
            returnValue += encryptFunc(cleanPlaintext.charAt(i), shift);
        }

    //Else, decrypt
    } else{
        for (var i = 0; i < cleanPlaintext.length; i++) {
            returnValue += decryptFunc(cleanPlaintext.charAt(i), shift);
        }
    }

    //Returns value to screen
    output.innerHTML = returnValue;
  }



//Encrypt function
function encryptFunc(char, shift) {
    if (alphabet.includes(char.toUpperCase())) { 
        position = alphabet.indexOf(char.toUpperCase());
        newPosition = (Number(position) + Number(shift))%26;    //26 = Loop through again
        return alphabet[newPosition];

    } else { 
        return char //If not in the alphabet array i.e. spaces
    }
}
  

//Decrypt function
function decryptFunc(char, shift) {
    if (alphabet.includes(char.toUpperCase())) { 
        position = alphabet.indexOf(char.toUpperCase());
        newPosition = (Number(position) - Number(shift))%26;    //Decrypt - Minus the shift

        //If the shift become minus, add add 26
        if(newPosition < 0) newPosition += 26;

        return alphabet[newPosition];

    } else { 
       return char 
    }
}