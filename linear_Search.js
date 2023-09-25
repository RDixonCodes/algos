//LINEAR SEARCH PROBLEMS..


//This function accepts an array and a value. Loop through the array and check if the 
//currnet array element is equal to the value. If it is, return the index at which the 
// element is found.If the value is never found, return -1.

const search = (array, val) => {
    for(var i = 0; i < array.length; i++){
        if(array[i] === val) return i; 
    }
    return -1
}

console.log(search([3, 9, 5, 1], 9));

// Write a function called binarySearch which accepts a sorted array and a value and
// returns the index at which the value exists. Otherwise, return -1

function binarySearch(arr, value){
    var left = 0;
    var right = arr.length-1;
    var mid = Math.floor((left + right) / 2);

    while(arr[mid] !== value){
        console.log(left,right, mid)
        if(value < arr[mid]){
            right = mid -1;
        } else {
            left = mid +1;
        }
        mid = Math.floor((left + right) / 2);
    }
    console.log(left, right, mid)
    if(arr[mid] == value){
        return mid;
    }
    return -1;
}

console.log(binarySearch([2,3,5,6,7,9,11,13,15,19], 9));

//SHort version

function binarySearch(arr, value){
    var left = 0;
    var right = arr.length-1;
    var mid = Math.floor((left + right) / 2);

    while(arr[mid] !== value){
        if(value < arr[mid]) right = mid -1;
        else left = mid +1;
        mid = Math.floor((left + right) / 2);
    }
    return (arr[mid] == value) ? mid : -1;
}

console.log(binarySearch([2,3,5,6,7,9,11,13,15,19], 11));

const naiveSearch = (long, short) =>{
    var count = 0;
    for(var i = 0; i < long.length; i ++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i + j]) break;
            if(j === short.length - 1) count ++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "le"));


//Bubble sort

function numSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i --){
        noSwaps = true; 
        for(var j = 0; j < i - 1; j ++){
            console.log(arr, arr[j], arr[j+1])
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;
            }
        }
        if(noSwaps) break;// noSwap variable used to optimize function.
    }
    return arr;
}

// console.log(numSort([3,54,1,34,8,13,4,78,2,42]))

//Selection Sort

const selectSort = (arr) => {
    for(var i = 0; i < arr.length; i ++){
//store the first element as the smallest value you've seen so far.
        var lowest = i;
//compare this item to the next item in the array until you find a smaller number.
        for(var j = i + 1; j < arr.length; j++){
//If the smaller number is found, designate that smaller number to be the new "minimum" and
//and continue until the end of the array.
            if (arr[j] < arr[lowest]){
                lowest = j;
            }
        }
//if the "minimum" is not the value (index) you initially began with, swap the two values.
        if(i !== lowest){
        console.log(i, lowest)
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        }
    }
    return arr;
}

// console.log(selectSort([2,56,9,23,4,12]))

//Selection sort alt version

function selectionSort(arr){
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        console.log(i, lowest)
        console.log(arr)
        if ( i !== lowest) swap(arr, i, lowest)
    }
    return arr;
}

// console.log(selectionSort([5,13,75,8,1,20,34]))

function insertionSort(arr){
    for(var i = 1; i < arr.length; i ++){
        var currVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            arr[j + 1] = arr[j]
            console.log(arr)
        }
        arr[j + 1] = currVal;
    }
    return arr
}

// console.log(insertionSort([3,76,12,8,1,30]))

