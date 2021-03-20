/*
7kyu - Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    //code here
  let arr = str.toLowerCase().split('')
  let sumX = 0
  let sumO = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i] === 'x'){
      sumX++
    }else if(arr[i] === 'o'){
      sumO++
    }
  }
 if(sumX === sumO){
    return true
  }else{
    return false
  }
}
