function reverseString(word) {
  // TODO: implement string reversing functionality

  // create an array from the input string
  const wordArray = word.split("");

  //reverse the array
  const reversedWordArray = wordArray.reverse();

  //create a string from the reversed array
  const reversedWord = reversedWordArray.join("");

  //return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  //reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }

}

// Write your algorithm here

//   //find length of word
//   const len = word.length;

//   //loop through half the word
//   for (let i = 0; i < len / 2; i++) {

//     //check if first and last string are the same
//     if (word[i] !== word[len - 1 - i]) {
//       return "False";
//     }
//   }
//   return "True";
// }
// isPalindrome("madam");


//convert the string to an array
//   const arrayValues = word.split('');

//   const reverseArrayValues = arrayValues.reverse();

//   const reverseWord = reverseArrayValues.join('');

//   if (word == reverseWord) {
//     console.log("True");
//   }
//   else {
//     console.log("False");
//   }
// }
// isPalindrome("abba");
// isPalindrome('racecar');
// isPalindrome('a');
// isPalindrome('robot');
// isPalindrome('ab');




/*
  Add your pseudocode here
*/

// reverse the input string
// if the reversed string is the same as the input
//  return true
// else
//  return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;