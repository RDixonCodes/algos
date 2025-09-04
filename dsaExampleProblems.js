//FREQUENCY COUNTER
/* Write a function called SAME, wjhich accepts two arrays. The function should return true if every value in the array 
has it's corresponding value squared in the second array. The frequency of values must be the same.**/

//naive version
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}

//REFACTORED
// Better for big O complexity as size of array increases;
//this 
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        console.log(frequencyCounter1);
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        console.log(frequencyCounter2);
    }
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log("Frequency Counter");
console.log(same2([1,2,3,4], [9,1,4,16]));

/* ANAGRAMS: Given two string, write a function to determine if the second string is an anagram of the first. 
An ANAGRAM is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. **/

function same3(word1, word2){
    if(word1.length != word2.length){
        return false;
    }
    let newWord1 = word1.split('');
    let newWord2 = word2.split('');
    let letterCounter1 = {};
    let letterCounter2 = {};

    for(let val of newWord1){
        letterCounter1[val] = (letterCounter1[val] || 0 ) + 1;
        console.log(letterCounter1);
    }

    for(let val of newWord2){
        letterCounter2[val] = (letterCounter2[val] || 0) + 1;
        console.log(letterCounter2);
    }

    for(let key in letterCounter1){
        if(!(key in letterCounter2)) {
            return false;
        }
        if(letterCounter2[key] !== letterCounter1[key]){
            return false;
        }
    }
    return true;
}

// console.log("Same3");
// console.log(same3("rat", "car"));
// console.log(same3("awesome", "someawe"));

/* Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero
or undefined if a pair does not exist. **/

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

// console.log("sumZero");
// console.log(sumZero([-2,-1,0,1,2,3]));

/** Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 */

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        //count unique values in array
        if(arr[i]!== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log("\nUnique Values");
console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]));
console.log(countUniqueValues([1,5,6,6,7]));

/** Write a funciton called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sume of n consecutive elements in the array.
 */

function maxSubarraySum(arr){
    if(num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i +j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}

console.log("\nMaxSubarraySum");
console.log(maxSubarraySum([1,2,5,2,9,0,3],3));

//refactored version

function maxSubarraySum2(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}