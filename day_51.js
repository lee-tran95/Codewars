// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

// Note:
// In the result codes and their values are in the same order as in M.

function stockList(listOfArt, listOfCat){
    let res = "";
    if(listOfArt.length === 0 || listOfCat === 0){
      return res
    }
    const map = listOfCat.reduce((acc, item) => {
      acc[item] = 0;
      return acc;
    },{})
    
    for(let i = 0; i < listOfArt.length; i++){
      let itemOfArt = listOfArt[i].split(" ");
      if(map.hasOwnProperty(itemOfArt[0].charAt(0))){
        map[itemOfArt[0].charAt(0)] += +itemOfArt[1];
        }
    }
    let keys = Object.keys(map)
    keys.forEach((key, index) => {
      console.log(index)
      if(index === 0){
        res = `(${key} : ${map[key]})`
      }else{
        res += ` - (${key} : ${map[key]})`
      }
    })
    return res;