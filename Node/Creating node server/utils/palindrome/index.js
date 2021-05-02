
const palindrome=(str)=> {
    let newStr=str.toLowerCase()
    return newStr == newStr.split('').reverse().join('');
  }

exports.palindrome = palindrome