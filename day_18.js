// Enough is enough!
// Alice and Bob were on a holiday. 
// Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. 
// However, Charlie doesn't like these sessions, since the motive usually repeats. 
// He isn't fond of seeing the Eiffel tower 40 times. 
// He tells them that he will only sit during the session if they show the same motive at most N times. 
// Luckily, Alice and Bob are able to encode the motive as a number. 
// Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of lst at most N times without reordering. 
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3]. 
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
    let hashmap = new Map();
    let copy = []
    for(let i = 0; i < arr.length; i++){
      if(!hashmap.has(arr[i])){
        hashmap.set(arr[i],1)
        copy.push(arr[i])
      }else if(hashmap.get(arr[i]) < n){
        hashmap.set(arr[i],hashmap.get(arr[i])+1)
        copy.push(arr[i])
      }
    }
    return copy
  }

  function deleteNth(arr,n){
    let cache = {}
    return arr.filter(item => {
      cache[item] = (cache[item] || 0) + 1
      return cache[item] <= n
    })
  }

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
  
function isTriangle(a,b,c)
{
  if(a+b <= c || a+c <= b || b+c <= a)
   return false;
  else{
   return true;
  }
}

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    let expanded = '';
    num = num.toString();
    let length = num.length;
    for(let i = 0; i < num.length;i++){
      if(num[i] == 0){
        length--
      }else if(num[i] != 0 && i != 0){
        expanded += ' + '
        expanded += num[i] + '0'.repeat(length-1);
        length--
      }
        else if(num[i] != 0){
        expanded += num[i] + '0'.repeat(length-1);
        length--
        }
    }
    return expanded
  }

  function expandedForm(num) {
    num = num.toString();
    num = num.split('');
    num = num.map((item,index) => {
      return item + '0'.repeat(num.length - index - 1)
    });
    num = num.filter(item => item != 0)
    return num.join(' + ')
  }