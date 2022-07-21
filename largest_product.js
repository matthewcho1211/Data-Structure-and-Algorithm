function largestProduct(arr, n) {
  let currentProduct;
  let maxProduct = -Infinity;
  let left = 0;
  let right = n - 1;
  while (right < arr.length) {
    currentProduct = 1;
    for (let i = left; i <= right; i++) {
      currentProduct *= arr[i];
    }
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
    left++;
    right++;
  }
  return maxProduct;
}

console.log(largestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
