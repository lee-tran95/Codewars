// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
      .split('')
    let upperAlphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split('')
    let temp = message
      .split('')
    for(let i = 0; i < temp.length; i++){
      const alphabetIndex = lowerAlphabet.indexOf(temp[i])
      const upperAlphabetIndex = upperAlphabet.indexOf(temp[i])
      if(alphabetIndex >= 0 && alphabetIndex <= 12){
        temp[i] = lowerAlphabet[alphabetIndex + 13]
      }else if(alphabetIndex >= 0 && alphabetIndex > 12){
        temp[i] = lowerAlphabet[alphabetIndex - 13]
        }
      
      if(upperAlphabetIndex >= 0 && upperAlphabetIndex <= 12){
        temp[i] = upperAlphabet[upperAlphabetIndex + 13]
      }else if(upperAlphabetIndex >= 0 && upperAlphabetIndex > 12){
        temp[i] = upperAlphabet[upperAlphabetIndex - 13]
        }
    }
    return temp.join('')
  }

  function rot13(message) {
    var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
  }