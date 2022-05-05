// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    let max = 0;
    let currentMax = 0;
    for(let i =0; i < arr.length; i++){
      currentMax += arr[i]
      if(currentMax > max){
        max = currentMax
      }
      if(currentMax < 0){
        currentMax = 0;
      }
    }
    return max
  }

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;
    if (walk.length != 10){
      return false
    }
    for ( let i = 0; i < walk.length; i++){
      switch(walk[i]){
          case 'n':
            n++;
            break;
          case 's':
            s++;
            break;
          case 'w':
            w++;
            break;
          case 'e':
            e++;
            break;
      }
    }
    if(e !== w || n !== s){
      return false
    }
    return true
  }