function averagePair(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));

function averagePair2(arr, target) {
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if ((arr[left] + arr[right]) / 2 > target) {
      right--;
    } else if ((arr[left] + arr[right]) / 2 < target) {
      left++;
    } else {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }
  return result;
}

console.log(averagePair2([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));
