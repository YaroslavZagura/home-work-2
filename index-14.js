const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, character) {
    let newText = ""; 
    for (let i = 0; i < length; i++) {
        newText += character.charAt(Math.floor(Math.random() * character.length));
    }
    return newText;
}
const key = generateKey(16, characters);
console.log(key);