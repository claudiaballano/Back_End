
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength("dog")); //3
console.log(findLongestWordLength("pray, eat, love")); //4

function findLongestWordLength(str) {
  let regex = new RegExp(',',"g")
  let newStr=str.replace(regex, "").split(' ')
  let wordLengthArr = newStr.map(word => word = word.length);
  return Math.max(...wordLengthArr)
  }
  
  



