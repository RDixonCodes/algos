//Given an array of integers (num) and an integer (target),
//return indicies of the two numbers such that they add up to (target).

function twoSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,5,1,8], 9));
console.log(twoSum([3,5,2,4], 7));

function isPal(str){
    if(str.length == 1) return true;

    if(str.length == 2) return str[0] === str[1];

    if(str[0] === str.slice(-1)) return isPal(str.slice(1, -1))

    return false
}

console.log("Is Pal")
console.log(isPal("434"))





var mergeTwoLists = function(list1, list2) {
    var result = [];
    var i = 0;
    var j = 0;
    
    while(i < list1.length && j < list2.length) {
        if(list2[j] > list1[i]) {
            result.push(list1[i])
            i ++;
        } else {
            result.push(list2[j])
            j ++;
        }
    }
    while(i < list1.length){
        result.push(list1[i])
        i ++;
    }
    while(j < list2.length){
        result.push(list2[j])
        j ++;
    }
    return result;
};

var list1 = [1,7,8,12];
var list2 = [5,9,32,50];

console.log(mergeTwoLists(list1, list2))

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that 
// each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the 
// result be placed in the first part of the array nums. More formally, if there are k elements after removing 
// the duplicates, then the first k elements of nums should hold the final result. It does not matter what you 
// leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums


var removeDuplicates = function(nums) {
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]) nums.splice(nums[i], 1);
        
    }
    console.log(nums)
    return nums.length;
}

console.log(removeDuplicates([1,2,2,3,3,4,5,5]));

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLL{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    merge(list1, list2) {
        if(list1.length === 0) return undefined;
        if(list2.length === 0) return undefined;
        var newList = [];
        var i = 0;
        var j = 0;
        while(i < list1.length && j < list2.length) {
            
        } 
    }
}

// var list1 = [1,7,12,8];
// var list2 = [5,9,50,32,0];

// let list = new SLL();

// list.merge(list1,list2);

// console.log(list);

// let sum = 0;
// for (let i = 0; i < 3; i++) {
//     for (let j = 5; j >2; j--) {
//         sum = sum + j + i;
//         console.log(i);
//         console.log(j);
//         console.log(sum);
//     }
// }

// console.log(sum);

let sum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
        if (i >= 2) {
            continue;
        }
        sum = sum + i + j;
    }
}
// console.log(sum)

/* Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order. */

function searchPosition(arr, target) {
    if(arr.length < 0) return undefined;
    let start = 0; 
    let end = arr.length - 1;

    if(target < arr[0]) {
        return 0;
    } else if (target > arr[end]) {
        return end + 1;
    }
    while (start <= end) {

        let mid = Math.floor((start + end)/2)

        if(target < arr[mid]) {
            end = mid - 1
        } else if(target > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return start;
}
// console.log("search position:")
// console.log(searchPosition([1,3,5,7,9], 8)); 

/** Example interview problem */

/* Write a method that accepts a single string or a phrase as an argument. prints out the number of characters, 
do not count whitespace or special characters. Prints out the number of words in the string. Prints out the longest word in the string. 
Print the shortest word in the string */

// const newStr = 'These are words to search';

const stringQuest = function(str) {

    console.log(str.trim().length)
    const strSplit = str.split(" ") //will seperate string into indices
    let wordCount = 0;
    let longestWord = strSplit[0];
    let shortestWord = strSplit[0];
    let charCount = str.replace(/[^a-zA-Z0-9]/g,'').length; //(/[^a-zA-Z0-9]/g,'') or (/ /g, '') clears white space and special characters for index count
    
    if(str == " ") return undefined;

    for(let i = 0; i < strSplit.length; i++) {

        if (strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i];
            }
        if (strSplit[i].length < shortestWord.length) {
            shortestWord = strSplit[i];
            }
        if (strSplit[i].length > 0) wordCount++;
            }
        return ["Letter Count: " + charCount + ", Word Count: " + wordCount + ", Longest Word: "+  longestWord + ", Shortest Word: " + shortestWord, str.trim()]
        }

// console.log(stringQuest("These are some words to search."))


var removeDuplicates = function(nums) {
    let unique = Array.from(nums);
    for(var i = 0; i < unique.length; i++) {
        if(unique[i] == unique[i + 1]) unique.splice(unique[i],1);
    }
    return {'length': unique.length, 'nums': unique};
}

//refactored version
const removeD = function(nums) {
    newNums = [...new Set(nums)]

    return newNums;
}

console.log(removeD([1,2,2,3,4,4,5,6,6]))
// console.log(removeDuplicates([1,2,2,3,4,4]))
// console.log(removeDuplicates('aabbccdee'))

/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. */

var removeElement = function(nums,val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == val) nums.splice(i, 1); 
    }
    return [nums.length, nums];
}

// console.log(removeElement([1,2,3,5,7,2], 2))

/* Given tow strings "needle" and "haystack", return the index of the first occurrence of "needle" in "haystack",
or -1 if "needle" is not part of "haystack" */

const strStr = function(haystack, needle) {
    for(var i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            if(haystack.slice(i , i + needle.length) === needle) {
            return i
            }
        }
    }
    return -1
}

// console.log(strStr("Hello", "l"))

/* Given a string (s) consisting of words and spaces, return the length of the last word
in the string.*/

const lastLength = function(str) {
    let lastWordLength;
    let lastWord;
    let strSplit = str.trim().split(" ")

    for(let i = 0; i < strSplit.length; i++) {
        lastWordLength = strSplit[strSplit.length - 1].length;
        lastWord = strSplit[strSplit.length - 1]; 
    }
    return `Last word is '${lastWord}', with a length of ${lastWordLength} characters`
}

console.log(lastLength("This is the string"))

/* You are given a large integer represented as an integer array (digits), where each (digits[i])
is the (i)th digit of the integer. The digits are ordered from most significant to least significant
in left-to-right order. The large integer does not contain any leading 0's. 

Increment the large integer by one and return the resulting array of digits. 

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

const plusOne = function(digits) { // working solution
    let d = digits.length - 1;

    while(true) {
        if(d < 0){
            digits.unshift(1);
            return digits;
        }
        if(digits[d] + 1 === 10){
            digits[d] = 0;
        } else {
            digits[d] += 1;
            return digits;
        }
        d--;
    }
}
console.log("plus one:")
console.log(plusOne([9]))
console.log(plusOne([5,3]))
console.log(plusOne([1,3,6]))
// console.log(plusOne(321))
// console.log(plusOne(87654))
// console.log(plusOne([5,4,3,2]))


// var timesTwo = function(num) {
//     num = Array.from(String(num), Number);

//     for(let i = 0; i < num.length; i++) {
//          num[i] = num[i] ** 2;
//     } 
//     return num
// }

// console.log(timesTwo(919))

//timesTwo refactor

var timesTwo = function(num) {
    num = Array.from(String(num), (num) => num ** 2)

    return num;
}

console.log('times two')
console.log(timesTwo(919))

/* Write a function to find the longest common prefix string amongst an array of strings
If there is no common prefix, return an empty string*/

const longestPrefix = function(strs) {
    if(!strs.length) return '';

    let prefix = '';
    let prefixLen = Math.min(...strs.map(strs => strs.length)) // will iterate over each word in array to find smallest prefix that matches
    for(var i = 0; i < prefixLen; i++) {
        let subStr = strs[0][i];
        if(strs.every(strs => strs[i] === subStr)) {
            prefix += subStr
        }
        console.log(prefix)
    }
    return prefix // giving too many. get rid of index not side by side
}

console.log(longestPrefix(["this","that","things"]))
console.log(longestPrefix(["would","net","slim"]))
console.log(longestPrefix(['car','cir']))


/* Find vowels in a given string */

const findVowels = (str) => {
    let lowerStr = str.toLowerCase();
    // let vowels = {a, e, i, o, u};
    let result = []

    for(let i = 0; i < lowerStr.length; i++) {
        if(lowerStr[i] === 'a' || 
        lowerStr[i] === 'e'|| 
        lowerStr[i] === 'i' || 
        lowerStr[i] === 'o'|| 
        lowerStr[i] === 'u') {
        result.push(lowerStr[i])
        }
    }
    return result;
}

console.log(findVowels('This would be a string'))

// .map() function sandboxing
const places = ['there','here','anywhere','somewhere'];

console.log("map function")
console.log(places.map(place => place.length));
// console.log(Math.min(...places.map(place => place.length)))
// console.log(Math.max(...places.map(place => place.length)))
// console.log(Math.floor(...places.map(place => place.length)))

const fizzBuzz = function(num){

    for(let i = 1; i <= num; i++){
        if(i % 3 == 0 && i % 5 == 0)
            console.log('FizzBuzz');

        else if(i % 3 == 0)
            console.log('Fizz');
    
        else if(i % 5 == 0)
            console.log('Buzz');
        
        else console.log(i);
    }
    return num;

}

console.log(fizzBuzz(20))

/* Given an array of strings "words" and an integer k, return the k most frequest strings.
    Return the answer sorted by the frequency from highest to lowest. Sort the words with the same
    frequency by their lexicographical order.*/

// const topKFrequent = (words, k) => {
//     let topK = [];
//     let topCount = 0;
//     for(let i = 0; i < words.length; i++) {
//         if(words[i] == words[i+1]){
//             tip
//         }
//     }
// }

/** Write the function reverseWords() that takes a message as an array 
 * of characters and reverses the order of the words in place. */

function reverseWords(words) {

    let newWord = words.reverse().join(" ")

    return newWord;
}

// console.log(reverseWords(['e','k','a','c','','d','n','u','o','p','','l','e','e','t','s']))


/**Write code that enhances all arrays such that you can call the array.last() 
 * method on any array and it will return the last element. If there are no elements 
 * in the array, it should return -1. */


Array.prototype.last = function() {
    return this.length ? this[this.length -1] : -1;
  };

var nums = [1,2,3];
var nums2 = [1,3,4,5,6];
var nums3 = [];

console.log(nums.last())
console.log(nums2.last())
console.log(nums3.last())

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

let symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

const romanToInt = function(s) {
    //set variable to hold the numeric conversion
    let value = 0;
    // iterate over the given input to determin which numerals should be used
    for(let i = 0; i < s.length; i ++) {
        //if the index in symbols matches s(input) 
        symbols[s[i]] < symbols[s[i + 1]] ? value -= symbols[s[i]] : value += symbols[s[i]]
    }
    return value;
}

console.log(romanToInt("XXXIV"));

//You are given a string (allowed) consisting of distinct characters and an array of strings (words). A string is
//consistant if all characters in the string appear in the string (allowed)

var countConsistentStrings = function(allowed, words) {
    return words.filter((x) => x.split("").every((x) => allowed.split("").includes(x))).length;
}

console.log(countConsistentStrings("ab", ["ab", "cdef", "aab","ceabd"]));
console.log(countConsistentStrings("abc", ["abc", "c", "ab","acb"]));



// const myRange = (max, min) => {
//     return Math.floor(Math.random() * (max - min -1) - min);
// }

// console.log("My Range");
// console.log(myRange(21, 3));


//using recursion practice 
const countdown = function(num){
    if(num < 1) {
    return [];
    } else {
        const newArray = countdown(num - 1);
        newArray.unshift(num);
        return newArray;
    }
}
console.log("countdown")
console.log(countdown(10));

const rangeOfNums = function(start, end) {
    if(start > end) {
        return [];
    } else {
        const numbers = rangeOfNums(start, end -1);
        numbers.push(end);
        console.log(numbers)
        return numbers;
    }
}

console.log(rangeOfNums(2,12))


//interview cake problem

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, 
// in lists. Write a function to merge our lists of orders into one sorted list

function mergeList(list1, list2){
        let result = [];
        let i = 0;
        let j = 0;
    while(i < list1.length && j < list2.length){
        if(list2[j] > list1[i]){
            result.push(list1[i])
            i++;
        } else {
            result.push(list2[j]);
            j++;
        }
    }
    while(i < list1.length){
        result.push(list1[i]);
        i++;
    }
    while(j < list2.length){
        result.push(list2[j]);
        j++
    }
    return result;

    //refactored. Does this actually cut down on the time complexity?
    // let newList = list1.concat(list2);
    // let sorted = newList.sort((a,b) => a - b);
    // return sorted;
}

list1 = [3, 4, 6, 10];
list2 = [1, 5, 8, 2];
// console.log("merge two list");
// console.log(mergeList(list1, list2));

/**Given a string (s) containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

function isValid(s){
    //create a variable to hold possible matches
    let stack = [];
    //loop over input
    for(var i = 0; i < s.length; i++){
        //if an open parentheses is found push to stack..
        if(s[i] == "("){
            stack.push(")");
        } else if(s[i] == "{"){
            stack.push("}");
        } else if(s[i] == "["){
            stack.push("]")
        //if closed bracket is found check that it matches the last stored open bracket
        } else if(stack.pop() !== s[i]){
            return false
        }
    }
    return !stack.length;
    
}

// console.log("isValid");
// console.log(isValid("({[]}"));


//Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = (num) => {
    var s = num.toString();
    var t = s.split("").reverse().join("");
    return s === t;
};

console.log("is palinddrome");
console.log(isPalindrome(343));




