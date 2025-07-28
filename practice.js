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


export {capitalize, reverseString, calculator}










