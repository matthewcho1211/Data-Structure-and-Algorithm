function maxSum(arr, size) {
  let max_value = -Infinity;
  if (size > arr.length) {
    return null;
  }
  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt > max_value) {
      max_value = attempt;
    }
  }
  return max_value;
}

function minSum(arr, size) {
  let min_value = Infinity;
  if (size > arr.length) {
    return null;
  }
  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
  }
  return min_value;
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));

function maxSum2(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let max_value = 0;
  for (let i = 0; i < size; i++) {
    max_value += arr[i];
  }

  let temValue = max_value;

  for (let j = size; j < arr.length; j++) {
    temValue = temValue + arr[j] - arr[j - size];
    if (temValue > max_value) {
      max_value = temValue;
    }
  }
  return max_value;
}

console.log(maxSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
