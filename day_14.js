// In this kata you will create a function that takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) 

function filter_list(l) {
    return l.filter(item => Number.isInteger(item))
  }

//   A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

//   He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
  
//   His mother looks out of a window 1.5 meters from the ground.
  
//   How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
  
//   Three conditions must be met for a valid experiment:
//   Float parameter "h" in meters must be greater than 0
//   Float parameter "bounce" must be greater than 0 and less than 1
//   Float parameter "window" must be less than h.
//   If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
  
//   Note:
//   The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

function bouncingBall(h,  bounce,  window) {
    let count = 1;
    if(h < 0 || bounce < 0 || bounce >= 1 || window >= h){
      return -1
    }else{
      while(h > window){
        if(h*bounce > window){
          count += 2;
        }
        h = h*bounce;
      }
      return count
    }
  }
  