// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

//   Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let total = 0;
    games.forEach(game => {
        if(game[0] > game[3]){
            total += 3;
        }else if(game[0] === game[3]){
            total += 1
        }
    });
    return total;
}

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }