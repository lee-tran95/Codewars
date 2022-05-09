// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 

function productFib(prod){
    let sum = 0;
    let n = 0;
    while( sum < prod){
      n++
      sum = fib(n)*fib(n+1)
    }
    if(sum === prod){
      return [fib(n),fib(n+1),true]
    }else{
      return [fib(n),fib(n+1),false]
    }
  }
  
  
  function fib(n){
    if(n === 0){
      return 0;
    }
    if(n === 1){
      return 1;
    }
    
    let prev = 0;
    let current = 1;
    let next = 0;
    while(n > 0){
      next = prev + current
      prev = current
      current = next
      n--
      }
    return current
  }
//   Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

//   When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
  
//   More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
  
//   The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
  
//   If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".
  
//   Examples:
//   (form of the result depends on the language)
  
//   race(720, 850, 70) => [0, 32, 18] or "0 32 18"
//   race(80, 91, 37)   => [3, 21, 49] or "3 21 49"  

function race(v1, v2, g) {
    let time = g/(v2-v1);
   if(v1 > v2) return null
   return [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)]
 }

//  Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    x = x.split(' ');
    let sumAll = 0;
    let sumCurrent = 0;
    let highest = 0;
    for(let i = 0; i < x.length; i++){
      for(let j = 0; j < x[i].length; j++){
        sumCurrent += alphabet.indexOf(x[i][j])+1
        console.log(sumCurrent)
      }
      if(sumCurrent > sumAll){
        sumAll = sumCurrent;
        highest = x[i];
      }
      sumCurrent = 0;
    }
    return highest;
  }