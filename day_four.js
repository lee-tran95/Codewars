// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
  return str.split('').reverse().join('');  
}



// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
    n = n.toString()
    let numbers = []
    for( i = 0; i < n.length; i++){
      numbers[i] = parseInt(n[n.length - 1 - i]);
    }
    return numbers;
  }

  
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

//   Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation){
    if(employed === true && vacation === false){
      return true
    }else{
      return false
    }
  }

function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
  }