// This algorithm finds a substring inside a string and returns how frequent it appears.
function naiveSearch(longStr, shortStr) {
    let counter = 0
    for (let i = 0; i < longStr.length; i++) {
        
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) {
                break
            }
            if (j === shortStr.length - 1) {
                counter = counter + 1
            }
        }
    }
    return counter
}
const longStr = 'how are you'
console.log(naiveSearch("how are you", "are"))