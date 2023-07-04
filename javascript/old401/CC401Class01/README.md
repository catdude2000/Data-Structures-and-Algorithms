# Challenge Title
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Whiteboard Process
![whiteboard image](javascript/CC401Class01/assets/codechall1ss.png)

## Approach & Efficiency
I at first tried a similar approach as we saw in class.  Then I decided to use a for loop instaead, as I felt I could more easily articulate and demonstrate that in my own words.

Used for loop to create array to yield time efficiency of O(n) and space of O(1)

## Solution
Const reverseArray = (arr) => {
    let revArr = [];
    for (let i = 0; i <= arr.length; i++){
        revArr.push(arr[arr.length - 1 - i])
    };
return revArr;
};