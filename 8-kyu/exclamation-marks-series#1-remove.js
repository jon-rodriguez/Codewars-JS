/*
8 kyu
Exclamation marks series #1: Remove a exclamation mark from the end of string


Description:
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

function remove(s){
  return s[s.length-1] == '!' ? s.slice(0, s.length-1) : s;
}
