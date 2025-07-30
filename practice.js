function capitalize(string) {
    return string = string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(str) {
    const strToreverse = str.split("")
    return strToreverse.reverse().join("")
}

const calculator = {
    add: (a,b) => a + b,
    sub: (a,b) => a - b,
    mul: (a,b) => a * b,
    div: (a,b) => b !== 0 ? a / b : 'Cant divide by 0'
}

function ceasarCipher(str, num) {
    let lowerCaseStr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let newStr = ''

    for (let i = 0; i < lowerCaseStr.length; i++) {
        let currentChar = lowerCaseStr[i]

        if (!/[a-z]/.test(currentChar)) {
            newStr += currentChar
            continue
        }

        let currentIndex = alphabet.indexOf(currentChar)
        let newIndex = currentIndex + num

        if (newIndex > 25 ) newIndex = newIndex - 26
        if (newIndex < 0) newIndex = newIndex + 26
        if(str[i] === str[i].toUpperCase()) {
           newStr += alphabet[newIndex].toUpperCase() 
        } 
        else newStr += alphabet[newIndex]
    }

    return newStr

} 


export {capitalize, reverseString, calculator, ceasarCipher}










