//Write a function factorial which accepts a number and returns the factorial of that number.
//A factorial is the product of an integer and all the integers below it; e.g., factoral (4!)
// is equal to 24, because 4*3*2*1 equals 24. Factorial (0!) is always 1.

const factorial = (num) => {
    if (num < 0 ) return 0;
    if (num <= 1 ) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(4));

//Write a function called reverse which accepts a string and returns a new string in reverse.

const reverse = (str) => {
    if(str.length < 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// console.log(reverse('anything'));

//Write a recursive function called isPalindrome which returns true if the string passed to it
// is a palindrome. Otherwise it returns false.

function isPalindrome(str){
    //check length of given string
    if(str.length === 1) return true;

    if(str.length === 2) return str[0] === str[1];
    //check if letters in string follow the same pattern.
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

// console.log(isPalindrome('peep'));

// write a recursive function called someRecursive which accepts an array and a callback. The
// function returns true if a single value in the array returns true when passed to the callback.
//Otherwise it returns false.

function someRecursive(array, callback){
    if(array.length === 0) return false;

    if(callback(array[0])) return true;

    return someRecursive(array.slice(1), callback);
}

// console.log(someRecursive([1,2,3,4], isOdd));

//Write a recursive function called flatten which accepts an array of arrays and returns
// a new array with all values flattened.

function flatten(oldArr){
    //create an empty array
    var newArr = [];
        //iterate through old array to check for array indices to add to new array
        for(var i = 0; i < oldArr.length; i++){
            if(Array.isArray(oldArr[i])){ //check if each array is an array.
                newArr = newArr.concat(flatten(oldArr[i])) // combine indices in each array creating one array.
            } else {
                newArr.push(oldArr[i]) 
            }
        }

        return newArr;
}

// console.log(flatten([4,[2,5],1,[0],[2,4,5]]))

//Write a recursive function called capitalizeFirst. Given an array of strings, capatilize the first
// letter of each string in the array.

function capitalizeFirst(strArr){
    //if arrays length is one return the capitalized string
    if(strArr.length === 1) {
        let str = strArr[0];
        //if the array's lenght is one return the capitalized string
        return [str[0].toUpperCase() + str.substring(1)];
    }
    // make new variable that will hold all indecies.
    let capArr = capitalizeFirst(strArr.slice(0, -1));

    let str = strArr.slice(strArr.length-1)[0];
    capArr.push(str[0].toUpperCase() + str.substring(1));

    return capArr;
}

// console.log(capitalizeFirst(['this', 'better', 'work']))


//Write a recursive function called capitalizeWords. Given an array of wrods,
//return a new array containing each word capitalized.

const capitalizeWords = (array) => {
    //check length of array
    if(array.length === 1) {
        return [array[0].toUpperCase()]; //return capitalized
    }
    let res = capitalizeWords(array.slice(0, -1));//set new recursive variable 
    res.push(array.slice(array.length-1)[0].toUpperCase())// push result of new variable with all letters capitalized.
    return res;
}

console.log(capitalizeWords(['this', 'is', 'working']))