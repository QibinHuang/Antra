// 1: Reverse a number
function reverseNumber(num) {
  let str = num.toString();
  let reversed = str.split('').reverse().join('');
  return parseInt(reversed);
}

// 2: Check if a string is a palindrome
function isPalindrome(word) {
  word = word.toLowerCase().replace(/\s/g, '');
  let reversed = word.split('').reverse().join('');
  return word === reversed;
}

// 3: Generate all combinations of a string
function stringCombinations(str) {
  let combos = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combos.push(str.slice(i, j));
    }
  }
  return combos;
}

// 4: Alphabetical order
function alphabetOrder(str) {
  let letters = str.split('');
  letters.sort();
  return letters.join('');
}

// 5: Capitalize first letter of each word
function capitalizeWords(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

// 6: Find the longest word
function findLongestWord(sentence) {
  let words = sentence.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// 7: Count vowels
function countVowels(str) {
  let count = 0;
  let vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

// 8: Check for prime number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 9: Get type of argument
function getType(x) {
  return typeof x;
}

// 10: Identity matrix
function identityMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    matrix.push(row);
  }
  return matrix;
}

// 23: First non-repeated character
function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
      return ch;
    }
  }
  return null;
}

// 24: Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 25: Longest country name
function Longest_Country_Name(arr) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

// 26: Longest substring without repeating characters
function longestUniqueSubstr(str) {
  let max = '';
  for (let i = 0; i < str.length; i++) {
    let seen = {};
    let current = '';
    for (let j = i; j < str.length; j++) {
      if (seen[str[j]]) break;
      seen[str[j]] = true;
      current += str[j];
    }
    if (current.length > max.length) {
      max = current;
    }
  }
  return max;
}

// 27: Longest palindromic substring
function longestPalindrome(str) {
  let max = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let sub = str.substring(i, j);
      let reversed = sub.split('').reverse().join('');
      if (sub === reversed && sub.length > max.length) {
        max = sub;
      }
    }
  }
  return max;
}

// 28: Pass a function as parameter
function greet(name) {
  return 'Hi ' + name;
}

function sayHi(callback) {
  let user = 'Alice';
  console.log(callback(user));
}

// 29: Get the function name
function sampleFunction() {
  return sampleFunction.name;
}
