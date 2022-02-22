//QUESTION 1:
//https://www.codewars.com/kata/515e271a311df0350d00000f
// Complete the square sum function so that it squares each number
//  passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2
    }
    return sum
}



//QUESTION 2:
//https://www.codewars.com/kata/57fae964d80daa229d000126
// Remove an exclamation mark from the end of a string.
// For a beginner kata, you can assume that the input data is always a string, 
// no need to verify it.

function remove(s){
    return s.replace(/!/, '');
}


//QUESTION 3:
https://www.codewars.com/kata/55a2d7ebe362935a210000b2
// Given an array of integers your solution 
// should find the smallest integer.
// For example:
// Given[34, 15, 88, 2] your solution will return 2
// Given[34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, 
// that the supplied array will not be empty.

function findSmallestInt(arr){
    console.log(Math.min(arr))
}
