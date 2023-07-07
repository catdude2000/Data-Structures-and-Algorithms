# Challenge Title

Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process

![whiteboard image](CC401Class02/assets/codechall2ss.png)

## Approach & Efficiency

Used for loops to divide array into two different arrays and then add the value to the first half and then add the second half. The hope was to create array to yield time efficiency of O(n) and space of O(1).

## Solution

const pushMiddle = (arr, num) => {
  let frontArr = [];
  let endArr = [];
  let newArr = [];
  let length = arr.length / 2;

  for(let i = 0; i < length; i++){
    frontArr.push(arr[i]);
    endArr.push(arr[i + length]);
  }
  console.log(frontArr);
  console.log(endArr);
  for(let i = 0; i < length; i++){
    newArr.push(frontArr[i])
                };
  newArr.push(num);
  for(let i = 0; i < length; i++){
    newArr.push(endArr[i])
  };
  console.log(newArr);
  return newArr;
}
