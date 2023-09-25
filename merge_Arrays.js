const merge_Arrays = (arr1, arr2) => {
    //create empty array.
    var result =  [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length) {
        //if index of arr2 is larger than index of arr1 push to result.
        if(arr2[j] > arr1[i]){
            result.push(arr1[i])
            i ++;
        } else { //else push j
            result.push(arr2[j])
            j ++;
        }
    }
    // make sure to continue if one array is longer than the other.(account for edge case)
    while(i < arr1.length){
        result.push(arr1[i])
        i ++;
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j ++;
    }
    return  result;
}

var arr1 = [3,13,46]
var arr2 = [1,8,32,50]

console.log(merge_Arrays(arr1, arr2))

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge_Arrays(left, right);
}

// console.log(mergeSort([3,23,9,45]))

// Quick sort

function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    var pivot = arr[start];
    var swapIdx = start;

    for(var i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx ++;
            // console.log(arr)
            swap(arr, swapIdx, i)

        }
    }
    swap(arr, start, swapIdx)
    console.log(arr)
    return swapIdx;
}

// console.log(pivot([4,8,2,1,5,7,6,3]))

function quickSort(arr, left=0, right=arr.length - 1) {
    if(left < right){
    let pivotIdx = pivot(arr, left, right);
    console.log(arr)
    //left
    quickSort(arr, left, pivotIdx - 1);
    //right
    quickSort(arr, pivotIdx + 1, right);
    }

    return arr;

}

// console.log(quickSort([5,9,23,-2,4,53,12,1]))

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
    }

function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i ++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
        }
        return maxDigits;
    }

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length; i++){
        let digit = getDigit(nums[i], k);
        digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
}

console.log(radixSort([34,653,5474,12,2345,9862]))

function removeDublicates(nums){
    var k = 0;
    for(var i = 0; i < nums.length - 1; i ++){
        if(nums[i] === nums[i + 1])
        nums.append(nums[i])
            k ++
    }
    return k;
}

// console.log(removeDublicates([0,1,1,2,3,3,5]))