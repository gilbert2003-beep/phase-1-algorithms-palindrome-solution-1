function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/
function isPalindrome(str) {
  const formattedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
}

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
