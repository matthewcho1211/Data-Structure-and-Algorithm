function palindrome(num) {
  let str = num.toString();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(palindrome(1222222221));
