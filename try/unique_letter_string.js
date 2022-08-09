function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;
  while (end < str.length) {
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }
  if (maxLength == -Infinity) {
    return -1;
  } else {
    return maxLength;
  }
}

console.log(uniqueLetterString("thisishowwedoit"));
