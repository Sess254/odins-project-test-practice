function capitalize(string) {
    return string = string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(str) {
    const strToreverse = str.split("")
    return strToreverse.reverse().join("")
}



export {capitalize, reverseString}










