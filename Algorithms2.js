// Algorithms 2

// Write a function that takes in an unsorted array of any size. These elements are in the range of 1 to n. In the input array one number is missing. Your function should return the missing number. If the input array contains a negative number or non-numeric value then return an error with the correct error message.


function findMissingNumber(arr) {
    // check for negative numbers/non-numeric values
    if (arr.some(item => typeof item !== 'number' || item < 0)) {
        return "Invalid input, negative number or non-numeric value detected";
    }

    // sort array
    arr.sort((a, b) => a - b);

    // heck missing number
    for (let i = 0; i < arr.length; i++) {
        if (arr !== i + 1) {
            return `missing = ${1}`;
        }
    }

    return "Nothing is missing";
}


// console.log(findMissingNumber([4, 5, 1, 3, 5]));           


// this algorithm checks for negative numbers and non-numeric values in the input array and returns an error message if any are found. It then sorts the array and checks for the missing number. If no missing number is found, it should return a message saying nothing is missing. The time complexity is 0(n) because the algorithm iterates through the array once to check for negative numbers and non-numeric values, then iterates through the array again to sort it and then iterates through the array again to check for the missing number. The space complexity is 0(n) because the algorithm creates a new array to store the sorted array.