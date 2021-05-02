console.log(palindrome('eye')) //true
console.log(palindrome('eyE')) //true
console.log(palindrome('aziza')) //true

console.log(palindrome('vaca')) // false
console.log(palindrome(' eye  ')) // true
console.log(palindrome('_eye')) // true
console.log(palindrome('_eye8')) // true


function palindrome(str) {
  let regex = new RegExp('[^a-z]+', "gi")
  let newStr = str.replace(regex, "").toLowerCase()
  return newStr == newStr.split('').reverse().join('');
}




