// Isogram Checkers
/* Check if there is only one occurence of each letter in a word(string) and returns a bolean value */

const isIsogram = (string) => {
    let arr = Array.from(string.toLowerCase())
    let checking =  arr.filter((item, pos) => arr.indexOf(item)===pos)
    
    if (checking.length === string.length) {
        return true
    } else return false
}

console.log(isIsogram('ambidExtrously')) // true
console.log(isIsogram('patteRN')) // false

const anotherIsogram = (string) => {
    const result = string
                .toLowerCase()
                .split("")
                .every( (value, index) =>  null || 
                string.toLowerCase().indexOf(value) === index)

    return result
}

console.log(anotherIsogram('ambidExtrously')) // true
console.log(anotherIsogram('patteRN')) // false