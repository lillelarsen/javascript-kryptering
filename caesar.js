let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
ALPHABET += ALPHABET;
function encrypt(string, key = 3) {
    let alteredString = string = string.toUpperCase();
    let encrypttedString = ``;
    for(let i in alteredString) {
        if (ALPHABET.indexOf(alteredString[i]) > -1) {
        let index = ALPHABET.indexOf(alteredString[i]) - key;
        encrypttedString +=ALPHABET.substr(index, 1);
        } else {
            encrypttedString += alteredString[i];
        }
    }
    return encrypttedString;
}

function decrypt(string, key = 3) {
    let alteredString = string = string.toUpperCase();
    let encrypttedString = ``;
    for(let i in alteredString) {
        if (ALPHABET.indexOf(alteredString[i]) > -1) {
        let index = ALPHABET.indexOf(alteredString[i]) + key;
        encrypttedString +=ALPHABET.substr(index, 1);
        } else {
            encrypttedString += alteredString[i];
        }
    }
    return encrypttedString;
}