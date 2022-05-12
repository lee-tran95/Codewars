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