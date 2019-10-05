// Move all zeros to the left in array
const moveZerosToLeft = arr => {
  if (!Array.isArray(arr)) {
    return;
  }

  let zeroPos = 0;

  for (let i = arr.length - 1; i > zeroPos; i--) {
    // It's not zero, continue to the next element
    if (arr[i] !== 0) {
      continue;
    }

    // It's zero, swap element position with zeroPosition
    if (i > zeroPos) {
      arr[i] = arr[zeroPos];
      arr[zeroPos] = 0;
      zeroPos++;
    }
  }

  return arr;
};

const numbersArray = [1, 6, 3, 8, 7, 2, 2, 0, 1, 0, 6, 0, 6];
const zerosToLeftArray = moveZerosToLeft(numbersArray);

console.log(zerosToLeftArray);
