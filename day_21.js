// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let position =[];
    text = text.toLowerCase();
    text = text.split('');
    for(let i = 0; i < text.length; i++){
      if(alphabet.indexOf(text[i]) >= 0){
   
        position.push(alphabet.indexOf(text[i])+1)
      }
    }
    return position.join(' ');
  }
//   Given an array of integers, find the one that appears an odd number of times.

//   There will always be only one integer that appears an odd number of times.
  
//   Examples
//   [7] should return 7, because it occurs 1 time (which is odd).
//   [0] should return 0, because it occurs 1 time (which is odd).
//   [1,1,2] should return 2, because it occurs 1 time (which is odd).
//   [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//   [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
  
function findOdd(A) {
    const result = A.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
    for(const property in result){
      if(result[property]%2 != 0){
        return Number(property)
      } 
    }
  }
  