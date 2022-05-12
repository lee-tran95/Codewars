// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
    return array.sort((a,b) => a.length-b.length)
  };

//   Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//   * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//   * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//   * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    url = url.replace(/(http:\/\/)/, '')
    url = url.replace(/(https:\/\/)/, '')
    url = url.replace(/(www.)/, '')
    return url.split('.')[0]
  }

//   Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    return strng.replace(/[0-8]?9*$/, val => ++val)
    }