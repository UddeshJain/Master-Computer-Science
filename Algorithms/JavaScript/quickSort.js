/*
    * pivot - Place the pivot at correct position returns the index of pivot 
    * @param {arr, start, end} array - To place pivot at correct position
*/
function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let pivot = arr[start]
    let swapIndex = start
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

console.log(pivot([4,8,2,1,5,7,6,3]))