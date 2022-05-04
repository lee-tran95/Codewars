// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
    let count = 0;
    if( principal == desired){
      return 0;
    }else{
      while(principal < desired){
        principal += principal*interest - (principal*interest)*tax;
        count++
      }
    }
  return count;
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    for(let i = 0; i < array.length; i++){
      array[i] = array[i]*(-1)
    }
     return array;
  }

//   A square of squares
//   You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
  
//   However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
  
//   Task
//   Given an integral number, determine if it's a square number:
  
//   In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
  
//   The tests will always use some integral number, so don't worry about that in dynamic typed languages.
  
//   Examples
//   -1  =>  false
//    0  =>  true
//    3  =>  false
//    4  =>  true
//   25  =>  true
//   26  =>  false

var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
    }

