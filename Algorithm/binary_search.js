let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let midpoint = Math.floor((min + max) / 2);
    if (arr[midpoint] === target) {
      console.log("exist");
      return midpoint;
    } else if (arr[midpoint] > target) {
      max = midpoint - 1;
    } else if (arr[midpoint] < target) {
      min = midpoint + 1;
    }
  }
  console.log("doesn't exist");
  return -1;
}

console.log(binarySearch(numbers, 100));
