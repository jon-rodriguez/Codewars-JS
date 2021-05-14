/*
6kyu - Row of the odd triangle


Given a triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

odd_row(1)  ==  [1]
odd_row(2)  ==  [3, 5]
odd_row(3)  ==  [7, 9, 11]
Note: your code should be optimized to handle big inputs.
*/

const oddRow = n => Array(n).fill(0).map( (e, i) => Math.pow(n, 2) - n + 1 + i * 2 );