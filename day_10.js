// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    name = name.split(' ')
    let nameArray = name.map(item => item.substr(0,1).toUpperCase())
    return nameArray.join('.');
  }

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum (numbers) {
    if(numbers.length == 0){
      return 0;
    } else{
      return numbers.reduce((sum, current) => {
        return sum += current
      }, 0);
    }
  };

//   Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//   Note: a and b are not ordered!
  
//   Examples (a, b) --> output (explanation)
//   (1, 0) --> 1 (1 + 0 = 1)
//   (1, 2) --> 3 (1 + 2 = 3)
//   (0, 1) --> 1 (0 + 1 = 1)
//   (1, 1) --> 1 (1 since both are same)
//   (-1, 0) --> -1 (-1 + 0 = -1)
//   (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b )
{
   let min = Math.min(a,b)
   let max = Math.max(a,b)
   let sum = 0
   for (let i = min; min <= max; min ++)
     {
       sum += min;
     }
  return sum
}
// (max - min + 1) * (min + max) / 2 is the math way to solve this problem