/*
    * insertionSort - to sort a given array
    * @param {array} arr - Array to sort
*/
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (lowest !== i) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp   
        }
    }
    return arr
}

console.log(insertionSort([43,56,33,1,22,67,45]))