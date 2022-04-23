// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    string = string.toLowerCase();
    for( let i = 0; i < alphabet.length; i++){
      if(string.indexOf(alphabet[i]) === -1){
        return false
      }
    }
    return true
  }

//   Some numbers have funny properties. For example:

//   89 --> 8¹ + 9² = 89 * 1
  
//   695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
  
//   46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
  
//   Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
  
//   we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
//   In other words:
  
//   Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
  
//   If it is the case we will return k, if not return -1.
  
//   Note: n and p will always be given as strictly positive integers.

function digPow(n, p){
    numbers = String(n).split('')
    let sum = 0;
    for(let i = 0; i<numbers.length;i++){
      sum += numbers[i]**(p+i)
    }
    return sum/n >= 1 && sum/n % 1 == 0 ? sum/n : -1
  }

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

function findNextSquare(sq) {
    if(Math.sqrt(sq)%1 !== 0){
      return -1
    }else {
      return (Math.sqrt(sq)+1)**2
    }
  }