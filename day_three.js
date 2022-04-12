// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    return numbers.reduce((sum,current) => sum + current**2,0) 
   }

//    Create a function which answers the question "Are you playing banjo?".
//    If your name starts with the letter "R" or lower case "r", you are playing banjo!
   
//    The function takes a name as its only argument, and returns one of the following strings:
   
//    name + " plays banjo" 
//    name + " does not play banjo"
//    Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if (name.charAt(0) === 'r' || name.charAt(0)=== 'R'){
      name += " plays banjo";
    } else{
      name += " does not play banjo"
    }
    return name;
  }

//   Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    sum = 0
    arrayOfSheep.forEach(item => {
      if(item === true){
        sum += 1;
      }
    })
    return sum
  }
