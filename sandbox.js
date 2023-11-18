function find_max(arr) {
    var max = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
        max = arr[i];
        }
    }
    return max
} 

// console.log(find_max([5,37,9,20]))

/* Challenge 1: Countdown array
Given a positive integer, create and return an array starting with that number, counting down by 1 all the way to 0.
Example: 5 should return [5, 4, 3, 2, 1, 0]
*/

function count_down(num){
    var arr = []
    for(var i = num; i >= 0; i--){
        arr.push(i);
    }
    return arr;
}
// console.log(count_down(8))

/* Challenge 2: Reformat name
Given two strings representing a first name and last name, return a new string with the format
"last name, first name".  For example, given "Jack" and "Sparrow", return "Sparrow, Jack".
*/

function reformat(){
    var arr = ["jack", "sparrow"]
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1];
        arr[arr.length-1] = temp;
    }
    return arr;
}

// console.log(reformat())

function addUptTo(n) {
    let total = 0;
    for(var i=1; i <= n; i++) {
        total += i;
    }
    return total;
}

// console.log(addUptTo(10))

function runTheList(n) {
    console.log("Going up!")
    for(var i = 0; i <= n; i++){
        console.log(i)
    }
    console.log("Going down"); {
        for(var j = n; j >= 0; j--){
            console.log(j);
        }
    }
    console.log("Stop here.")
}
console.log(runTheList(5));

//Interview whiteboard algos.
// 1.
// Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] ->  : 29 , 2nd Smallest: 1

const secLargeSmallest = (arr1,arr2) => {

    const arr = arr1.concat(arr2)

    let largest = arr[0],
        secLargest = arr[0],
        smallest = arr[0],
        secSmallest = arr[0]

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
        secLargest = largest
        largest = arr[i];
        }
        if(arr[i] < smallest) {
        secSmallest = smallest
        smallest = arr[i]
        }
    }

    return `Second largest: ${secLargest} - Second smallest: ${secSmallest}`
}

const arr1 = [32,5,1,8,54]
const arr2 = [9,0,2,23,12]

console.log(secLargeSmallest(arr1,arr2));


// 2.
// Write a program to find the most repeated word in a string and the count of the word
// “Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on.”



// 3.
// Write a function to represent a Triangle, given input is the number of rows of the triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6

// LeetCode practice.
// 1. Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

const sumTwo = (nums, target) => {
    if(nums.length < 2)
    return [];

    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; i++){
            if(nums[i] + nums[j] == target)
            return [j, i];
        }
    }
}

const nums = [4,5,2,11];
const target = 15;

// console.log(sumTwo(nums, target))

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return[arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

// const arr3 = [-10,-2,-1,0,1,2,10,3];
// console.log(sumZero(arr3));

// implement a functuion called countUniqueValues, which accepts a sorted array,
// and counts the unique vlaues in the array. There can be negative numbers in 
// the array, but it will always be sorted.

const countUniqueValues = (arr) => {
    let unique = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1])
        unique++;
    }
    return unique;
}

// const value = [1,2,2,4,5,5,9,12];
// console.log(countUniqueValues(value));

//Write a function called maxSubarraySum which accepts
// an array of integers and numbers called n. The function 
// should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
    if ( num > arr.length ) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i +j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp, max)
    }
    return max;
}

const arrS = [2,6,3,7,9,11,6,2]
// console.log(maxSubarraySum(arrS, 3))

// more efficient form
function maxSubarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if ( arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i ++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

// console.log(maxSubarraySum2(arrS, 3))

//Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum fo a subarray with the length of the number passed to the function.

function maxSubarraySum(arr4, num){
    if (arr4.length < num)
    return null;

    let total = 0;
    for(let i = 0; i < num; i++) {
        total += arr4[i];
    }
    let currentTotal = total;
    for(let i = num; i < arr4.lenth; i++){
        currentTotal += arr4[i] - arr4[i-num];
        total = Math.max(total, currentTotal);
    }
    return total;
}

// console.log(maxSubarraySum([5,6,1,12], 3));


// Write a function called minSubArrayLen which accepts two parameters.
// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function. If there 
// isn't one, return 0 intstead.

// example: minSubArrayLen([2,3,1,2,4,3], 7) = 2 --> because [4,3] is the smallest subarray.

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        //if current window doesn't add up to the given sum then
            //move the window to the right
        if(total < sum && end < nums.length) {
            total += nums[end];
            end ++;
        }
        // if currnt widndow adds up to at least the sum given then
            // we can shrink the window
            else if(total >= sum) {
                minLen = Math.min(minLen, end-start);
                        total -= nums[start];
                        start++;
            }
            // current total less than required total but we reach the end,
            // need this or else we'll be in an infinit loop.
            else {
                break;
            }
        }

        return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2,5,8,1,6], 11))

//Callstack example

function takeShower() {
    console.log("Showering!");
}

function cookFood() {
    let items =["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}

function eatBreakfast(){
    let meal = cookFood() 
    console.log(`Eating ${meal}`);
}

function wakeUp() {
    takeShower()
    cookFood()
    eatBreakfast()
    
    console.log("Ok ready to go to work!");
}

// console.log(wakeUp());

//Helper method recursion function

function collectOddValues(arr) {
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 === 1){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))// Helps to shrink the array. Starts at the next value.
    }

    helper(arr)

    return result;
}

// console.log(collectOddValues([2,5,1,8,7,4,9]))

//Pure recursive function

function collectOddValues1(arr) {

    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 == 1) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

// console.log(collectOddValues([1,2,3,4,5]));

// Recursion Problem set:


//Write a function called power which accetps a base and an exponent. The function should
//retrun the power of the base to the exponent. The function should mimic the functionality of 
//Math.pow() - do not worry about negative bases and exponents.

function power(base, expnt) {
    if(expnt === 0) return 1;
    return base * power(base, expnt-1);
}

// console.log(power(8,2))


// function factorial(num){
//     if(num === 1) return 1;
//     return num * factorial(num - 1);
// }

// console.log(factorial(4));



function countDown(num){

    for(var i = num; i > 0; i -- ) {
        console.log(i)
    }
    return i;
}
// console.log(countDown(20));

//reversing a string without using method
const reverseThis = function(str){
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr += str[i];
    }
    return revStr;
}

// console.log(reverseThis("YOLO"))
// console.log(reverseThis("HAD TO DO IT"))

function factorial(num){
    let sum = 1;
    for(let i = 2; i <= num; i++){
        sum *= i;
    }
    return sum;
}

console.log(factorial(5))

function recursiveFact(num){
    if(num <= 0) return 1;

    return num * recursiveFact(num - 1)
}

console.log(recursiveFact(5));


function largestOfFour(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      let largeNum = arr[i][0];
      for (let j = 1; j < arr[i].length; j++){
        if(arr[i][j] > largeNum) {
            largeNum = arr[i][j]
        }
      }
      newArr[i] = largeNum;
    }
    return newArr;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function confirmEnding(str, target){
    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("words", 'ds'))