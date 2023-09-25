// const squareDigits = function(num){
//     let newNum = num.toArray();
//     for(let i = 0; i < num.length; i++) {
//         thisNum = newNum[i] ** 2;

//     }
//     return result;
// }

// console.log(squareDigits(9119))

/* Implement a difference function, which subtracts one list from another and returns the result. 
    It should remove all values from list a, which are present in list b keeping their order. */

const arrayDiff = function(arr1, arr2) {
    let result = []
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; i < arr2.length; i++) {
            if(arr1[i] == arr2[j])
            arr1.slice(arr1[i],1)
        }
        result.push(arr1[i])
    }

    return result;
}

// console.log(arrayDiff([1,2,3], [2,3]))

/* Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed. Strings passed in will consist of only letters 
and spaces. Spaces will be included only when more than one word is present. */

var flip5 = function(str) {
    let flippedStr = str.split(" ");

    for(let i = 0; i < flippedStr.length; i++) {
        if(flippedStr[i].length >= 5) {
            flippedStr[i] = flippedStr[i].split("").reverse().join("")
        }
        str = flippedStr.join(" ")
    }
    return str;
}

// console.log(flip5("Something is better than nothing"))
// console.log(flip5("Welcome"))
// console.log(flip5("Just kidding there is still one more"))

/* In this kata you will create a function that takes a list of non-negative integers and strings and 
returns a new list with the strings filtered out. */

function filter_list(list) {
    let new_list = []
    for(let i = 0; i < list.length; i++) {
        if(typeof list[i] != 'string') {
            new_list.push(list[i])
        }
    }
    return new_list
}

// console.log(filter_list([1,'string1',2,3,'string2']))

/* ATM machines allow 4 to 6 digit PIN codes and PIN codes cannot contain but
exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return 
true, else return false. */

const pinCode = (pin) => {
    return /^\d+$/.test(pin) && //REGEX finds out if the pin is only numbers 0-9.
    [4,6].includes(pin.length)
    // if(typeof pin === 'string' &&
    // Number.isInteger(+pin) &&
    // !Number.isInteger(pin) &&
    // [4,6].includes(pin.length)) {
    //     return true;
    // }
    // return false;
}


// console.log(pinCode('1234'))
// console.log(pinCode('a2348'))
// console.log(pinCode('0238'))
// console.log(pinCode('02348'))
// console.log(pinCode('123489'))
// console.log(pinCode('1234892'))
// console.log(pinCode('12.0'))


/* Complete the solution so that it returns true if the first argument(string) passed in ends with the
2nd argument(also a string)*/

function solution(str, ending) {
    return str.endsWith(ending)
}

// console.log(solution('abc', 'd'))
// console.log(solution('abc', 'bc'))
// console.log(solution('abcde', 'cde'))

/* Write a function that will return the count of disinct case-insensiteve alphabetic characters
and numeric digits that occur more than once in the input string. The input string can be assumed 
to contain only alphabets (both uppercase and lowercase) and numeric digits*/

function duplicatCount(text) {
    let newText = text.toLowerCase();
    let obj = {};
    let charCount = 0;

    for(let i = 0; i < newText.length; i++) {
        if(!obj[newText[i]]){
            obj[newText[i]] = 1;

        } else if(obj[newText[i]] < 2){
            obj[newText[i]] += 1;
            charCount++
        }
    }
    return charCount
}

// console.log(duplicatCount('aabb1'))
// console.log(duplicatCount('aabbcde'))
// console.log(duplicatCount('1aaBb1'))
// console.log(duplicatCount('invisibility'))

/*Implement the function unique_in order which takes as argument a sequence and returns a 
list of items without any elements with the same value next to each other and preserving the
original of elements.*/

function uniqueInOrder(entry){
    let result = [];
    for(let i = 0; i < entry.length; i++) {
        if(entry[i] !== entry[i + 1])
        result.push(entry[i])
    }
    return result;
}

// console.log(uniqueInOrder('AABBCCD'))
// console.log(uniqueInOrder('AAbBCcDEE'))
// console.log(uniqueInOrder([1,2,2,3,4,4,5]))

/* You are given an array(which will have a length of at least 3, but could be very large.) countaining
integers. The array is either entirely conmprised of odd integers or entirely comprised of even integers
except for a single integer N. Write a method that takes the array as an argument and returns this
"outlier" N. */

function findOutLier(integers){
    let outLierEven = [];
    let outLierOdd = [];
    for(let i = 0; i < integers.length; i++){
        if(integers[i] % 2 == 0){
            outLierEven.push(integers[i])
        } else {
            outLierOdd.push(integers[i])
        }
    }
    return outLierEven.length === 1 ? outLierEven[0] : outLierOdd[0]; //using ternary operator for result
}

console.log(findOutLier([1,3,5,10,11,13,15]))
console.log(findOutLier([2,4,6,7,12,14,18]))

// function findIt(int){ // alternate version using filter()
//     let even = int.filter(a => a % 2 === 0);
//     let odd = int.filter(a => a % 2 !== 0);

//     return even.length === 1 ? even[0] : odd[0];
// }
// console.log(findIt([1,3,5,8,11,13,33]))
// console.log(findIt([2,4,6,9,10,12,14]))

/*Implement the function which takes an array containing the names of people that like an item. It must
return the display text as shown in the examples. */

function likes(names){
    if(names.length == 0){
        return 'no one likes this'
    }else if(names.length == 1){
        return `${names[0]} likes this`
    }else if(names.length == 2){
        return `${names[0]} and ${names[1]} like this`
    }else if(names.length == 3){
        return `${names[0]}, ${names[1]}, and ${names[2]} like this`
    }else if(names.length > 3){
        return `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`
    }
}

// console.log(likes([]))
// console.log(likes(['Asher']))
// console.log(likes(['Asher','Fern']))
// console.log(likes(['Asher','Fern','Henry']))
// console.log(likes(['Asher','Fern','Henry','Nicky','Carl']))

/*The goal of this exercise is to convert a string to a new string where each character in the new
string is "(" if that character appears only once in the original string, or ")" if that character
appears more than once in the original string. Ignore capitalization when determining if a character
is a duplicate. */

function duplicatEncode(word){
    let wordLow = word.toLowerCase();
    let result = ''
    for(let i = 0; i < wordLow.length; i++){
        if(wordLow.lastIndexOf(wordLow[i]) === wordLow.indexOf(wordLow[i])){
            result += '(';
        } else 
        result += ')';
    }
    return result
}

// console.log(duplicatEncode('never'))

/*The returned format must be correct in order to complete this challange. Don't forget the space after
the closing parentheses. */

function createPhoneNumbers(digits){
    let areaCode = '';
    let firstThree = '';
    let last = '';
    for(let i = 0; i < digits.length; i++){
        if (i < 3) {
            areaCode += digits[i].toString()
        } else if (i >= 3 && i < 6) {
            firstThree += digits[i].toString()
        } else if (i >= 6) {
            last += digits[i].toString()
        }
    }
    return `(${areaCode}) ${firstThree}-${last}`
}

// console.log(createPhoneNumbers([1,2,3,4,5,6,7,8,9,0]))

/*refactor */

function createPhoneNumbers(digits){
    let format = "(xxx) xxx-xxxx";
    for(let i = 0; i < digits.length; i++){
        format = format.replace('x', digits[i])
    }
    return format
}

// console.log(createPhoneNumbers([1,2,3,4,5,6,7,8,9,0]))

/** A Marcissistic Number is a positve number which is the sum of its own digits, each raised 
 * to the power of the number of digits in a given base.
*/

function narcissistic(value){
    let strVal = value.toString().split('');
    let integerSet = strVal.map((item)=>{
        return Number(item)
    });

    let keyFunc = function powerCalc(test){
        let a = test.length;
        return test.map((item) => {return Math.pow(item, a);
        }).reduce((total, item) => {
            return total + item;
        }, 0);
    }

    if(keyFunc(integerSet) == value) {
        return true;
    } else {
        return false;
    }
}
// console.log(narcissistic(153))
// console.log(narcissistic(164))
// console.log(narcissistic(98))
// console.log(narcissistic(371))

function validBraces(braces) {
    let result = [];
    for(let i = 0; i < braces.length; i++) {
        if (braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
            result.push(braces[i])
        } else {
            if(result.length === 0) return false // will return true if result.length > 1.
            let lastValue = result[result.length-1]
            if( (braces[i] === ']' && lastValue === '[') || 
            (braces[i] === '}' && lastValue === '{') || 
            (braces[i] === ')' && lastValue === '(') ) {
                result.pop()
            } else {
                break;
            }
        }
    }
    return result.length === 0;
}

// console.log(validBraces('()))'))
// console.log(validBraces('(}'))
// console.log(validBraces('({})'))
// console.log(validBraces(')({})]'))
// console.log(validBraces('[({})]'))

/** Write a function, which takes a non-negative integer (seconds) as input and returns the time in a 
  human-readable format (HH:MM:SS) */

function humanReadable(seconds) {
    var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds % 60;
    return `${formatDate(hours)}:${formatDate(minutes)}:${formatDate(newSeconds)}`
}

function formatDate(n) {
    var number = Number.parseInt(n)
    return number > 9? number : '0' + number;
}

// console.log(humanReadable(4075))

let a = 'turn this around'
let b = a.split("").reverse().join(" ")
console.log(b)