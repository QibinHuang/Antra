// 1: Reverse a number
function reverseNumber(x) {
  return parseInt(x.toString().split('').reverse().join(''));
}

// 2: Check if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.replace(/\s+/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

// 3: Generate all combinations of a string
function stringCombinations(str) {
  const results = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      results.push(str.slice(i, j));
    }
  }
  return results;
}

// 4: Alphabetical order
function alphabetOrder(str) {
  return str.split('').sort().join('');
}

// 5: Capitalize first letter of each word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// 6: Find the longest word
function findLongestWord(str) {
  const words = str.split(' ');
  return words.reduce((a, b) => a.length >= b.length ? a : b);
}

// 7: Count vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// 8: Check for prime number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 9: Get type of argument
function getType(value) {
  return typeof value;
}

// 10: Identity matrix
function identityMatrix(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    result.push(row);
  }
  return result;
}

// 23: Find the first non-repeated character
function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

// 24: Bubble Sort
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 25: Longest country name
function Longest_Country_Name(country_names) {
  return country_names.reduce((a, b) => a.length > b.length ? a : b);
}

// 26: Longest substring without repeating characters
function longestUniqueSubstr(str) {
  let maxLength = 0, start = 0, seen = {}, longest = "";
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]] >= start) {
      start = seen[str[i]] + 1;
    }
    seen[str[i]] = i;
    if (i - start + 1 > maxLength) {
      maxLength = i - start + 1;
      longest = str.substring(start, i + 1);
    }
  }
  return longest;
}

// 27: Longest palindromic substring
function longestPalindrome(str) {
  if (str.length <= 1) return str;
  let start = 0, end = 0;
  for (let i = 0; i < str.length; i++) {
    let len1 = expandAroundCenter(str, i, i);
    let len2 = expandAroundCenter(str, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return str.substring(start, end + 1);
}

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

// 28: Pass a function as parameter
function greet(name) {
  return "Hello, " + name + "!";
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

// 29: Get the function name
function sampleFunction() {
  return sampleFunction.name;
}
