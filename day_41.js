// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.

function dirReduc(arr){
    let cardinal = {
      "NORTH":"SOUTH",
      "SOUTH":"NORTH",
      "EAST":"WEST",
      "WEST":"EAST"
    }
    let direction = [];
    for(let i = 0; i < arr.length; i++){
      if(direction.length === 0){
        direction.push(arr[i])
      }else if(cardinal[arr[i]] === direction[direction.length - 1]){
        direction.pop();
      }else{
        direction.push(arr[i])
      }
    }
    return direction
  }