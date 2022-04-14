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

