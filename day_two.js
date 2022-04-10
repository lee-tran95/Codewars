// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
    let string = '';
    for(let i = 0; i < n; i++){
      string += s;
    }
    return string;
  }

  //or

  function repeatStr (n, s) {
      return(s.repeat(n))
  }





  //Simple, remove the spaces from the string, then return the resultant string.
  // the / /gi is a regex that uses the global ignore to replace all instances of the space in the strong.
  function noSpace(x){
    return x.replace(/ /gi,'')
  }
  
  //or
  function noSpace(x){
    return x.split(' ').join('')
  }



// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
function fakeBin(x){
    x = x.split('');
    for(let i = 0; i < x.length; i++){
      if(x[i]< 5){
        x[i] = 0;
      } else{
        x[i] = 1;
      }
    }
    return x.join('');
  }
//or
function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
  }
//or
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}