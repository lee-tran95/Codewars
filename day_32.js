// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

var min = function(list){
    list.sort((a,b) => a-b)
    return list[0];
}

var max = function(list){
    list.sort((a,b) => b-a)
    return list[0];
}

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
    arr = arr.sort((a,b) => a-b)
    console.log(arr)
      if(arr[0] === arr[1] && arr[0] !== arr[arr.length-1]){
        return arr[arr.length-1]
      }else{
        return arr[0]
      }
  }

  function findUniq(arr) {
    return arr.find(e => arr.indexOf(e) === arr.lastIndexOf(e))
    }