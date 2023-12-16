const isPalindrome = (word) => {
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i].toLowerCase() !== word[j].toLowerCase()) return false;
  }
  return true;
};

console.log(isPalindrome("katak"));
console.log(isPalindrome("malam"));
console.log(isPalindrome("12021"));
