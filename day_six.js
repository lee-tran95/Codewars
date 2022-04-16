// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    let pinLen = (pin.length == 4 || pin.length == 6);
    let digitOnly = pin.match(/^\d+$/)
    if(pinLen && digitOnly){
      return true
    }else{
      return false
    }
  }

//   This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s){
    let finalString ='';
    for(let i = 0; i < s.length; i++){
      let upper = s[i]
      upper = upper.toUpperCase()
      let lower = s[i]
      lower = lower.toLowerCase()
      if (i < s.length - 1){
        finalString += upper + lower.repeat(i) + '-'
        }else{
          finalString += upper + lower.repeat(i)
        }
    }
    return finalString;
  }
// use return in arrow function methods such as map if start with { else, no return is needed
  function accum(s){
    s = s.split('');
    s = s.map((c,i) => {
             return c.toUpperCase() + c.toLowerCase().repeat(i)
        });
    return s.join('-')

  }
//   You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//   #Examples:
  
//   Kata.getMiddle("test") should return "es"
  
//   Kata.getMiddle("testing") should return "t"
  
//   Kata.getMiddle("middle") should return "dd"
  
//   Kata.getMiddle("A") should return "A"
//   #Input
  
//   A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
  
//   #Output
  
//   The middle character(s) of the word represented as a string.

  function getMiddle(s)
{
  
  if (s.length % 2 == 0){
    return s[(s.length/2 - 1)] + s[(s.length/2)]
  }else{
    return s[Math.floor(s.length/2)]
  }
}

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length/2 - 1), s.length%2 === 0 ? 2:1)
}
