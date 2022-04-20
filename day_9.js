// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    if(input == null || input.length === 0){
        return []
      }else{
        input.forEach(item => {
        item > 0 ? count++ : sum += item
          });
          return [count,sum];
      }
  }

//   You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//   Array can contain numbers or strings. X can be either.
  
//   Return true if the array contains the value, false if not.
  
function check(a, x) {
    // can also just do a.includes(x) since method returns a true or false value
    return a.includes(x) ? true:false
  }
//   Simple, given a string of words, return the length of the shortest word(s).

//   String will never be empty and you do not need to account for different data types.

  function findShort(s){
    s = s.split(' ')
    let shortestLength = s[0].length;
    s.forEach(word => {
      if(word.length < shortestLength){
        shortestLength = word.length
      }
    });
    return shortestLength
  }
