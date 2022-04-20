// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)
function hero(bullets, dragons){
    return (bullets/dragons) >= 2 ? true : false
  }

//   Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
    let array = [];
    for (let i = 0; i < n; i++){
      array.push(n-i);
    }
    return array;
  };

//   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
  function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''))
  }