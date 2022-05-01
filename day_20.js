// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
var number=function(array){
    for(let i = 0; i < array.length; i++){
      array[i] = `${i+1}: ${array[i]}`
    }
    return array
  }

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    words = words.split(' ');
    return words.sort((a,b)=> {
      return a.match(/\d/) - b.match(/\d/)
    }).join(' ')
  }

//   Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
    let sum = s1 + s2 + s3;
    let score = sum/3;
    console.log(score)
    
    if(score >= 90){
      return 'A'
    }else if(score >= 80){
      return 'B'
    }else if(score >= 70){
      return 'C'
    }else if(score >= 60){
      return 'D'
    }else{
      return 'F'
    }
  }

  function getGrade(...scores) {
    let average = scores.reduce((a, b) => a + b) / scores.length
    
    if (average >= 90) return 'A'
    else if (average >= 80) return 'B'
    else if (average >= 70) return 'C'
    else if (average >= 60) return 'D'
    else return 'F'
  }