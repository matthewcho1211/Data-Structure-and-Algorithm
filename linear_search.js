let numbers = [3, 1, 2, 4, 5, 10, 6, 9, 7, 8];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(numbers, 10));
