// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    let hashmap = new Map();
    b.forEach((item,index) => hashmap.set(item,index))
    return a.filter(item => hashmap.has(item) == false)
  }

function arrayDiff(a,b) {
    return a.filter(item => !b.includes(item));
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'');
  }

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let hashmap = new Map();
    word = word.split('')
    word.forEach(item => {
      if(hashmap.has(item.toLowerCase()) !== true){
        return hashmap.set(item.toLowerCase(),1);
      } else{
        return hashmap.set(item.toLowerCase(),2);
      }
    });
    return word.map(item =>{
      if(hashmap.get(item.toLowerCase()) !== 1){
        return ")"
        } else{
          return '('
        }
    }).join('')
  }

  function duplicateEncode(word){
    word = word.toLowerCase();
    word = word.split('');
    return word.map((item,index,array) => {
      return array.indexOf(item) == array.lastIndexOf(item) ? '(':')'
        })
      .join('')
}