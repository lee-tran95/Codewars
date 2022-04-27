// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

function comp(array1, array2){
    if(array1 == null || array2 == null)
      return false
    if(!array1.length || !array2.length){
      return false
    }
    array1.forEach(item => {
      if(array2.indexOf(Math.pow(item,2)) >= 0){
        array2.splice(array2.indexOf(Math.pow(item,2)),1)
      }
    })
    return array2.length === 0
  }

//   Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//   The binary number returned should be a string.
  
//   Examples:(Input1, Input2 --> Output (explanation)))
  
//   1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//   5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    let number = a + b;
    let binary = (number % 2).toString();
    while(number > 1){
      number = parseInt(number/2)
      binary = (number%2) + binary;
    }
    return binary
  }

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

function DNAStrand(dna){
  
    if(!dna.length){
      return dna
    }
    else{
      dna = dna.split('')
      return dna.map(item =>{
        if(item =='A'){
          return 'T'
        }else if(item == 'T'){
          return 'A'
        }else if(item == 'C'){
          return 'G'
        }else if(item == 'G'){
          return 'C'
        }
      }).join('')
    }
  }

function DNAStrand(dna){
let hashmap = new Map();
hashmap.set('A','T')
hashmap.set('T','A')
hashmap.set('C','G')
hashmap.set('G','C')
dna = dna.split('');
return dna.map(item => hashmap.get(item)).join('')
}