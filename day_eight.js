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