//  Algorithms 1

// 1. Write an algorithm that returns true if the given string is a palindrome. Otherwise, return false.
function isPalindrome(str) {
    // remove none alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // compare reversed string with the original
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

// console.log(isPalindrome("radar"));

// This algorithm uses the replace() method to remove all non-alphanumeric characters from the string and convert it to lowercase. It then uses the split(), reverse() and join() methods to reverse the string. It  aslo compares the reversed string with the original string and returns true if they are equal and false if they are not equal. The time complexity 0(n) is because the algorithm iterates through the string once to remove non-alphanumeric characters and convert to lowercase and then iterates through the string again to reverse it. The space complexity is 0(n) because the algorithm creates a new string to store the reversed string.