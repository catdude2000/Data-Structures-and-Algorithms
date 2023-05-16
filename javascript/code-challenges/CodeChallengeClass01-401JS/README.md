# Challenge Title
Code Challenge: Class 01

## Whiteboard Process
![whiteboard image](javascript/code-challenges/CodeChallengeClass01-401JS/assets/codechall1ss.png)

## Approach & Efficiency
I at first tried a similar approach as we saw in class.  Then I decided to use a for loop instaead, as I felt I could more easily articulate and demonstrate that in my own words.

## Solution
Const reverseArray = (arr) => {
    let revArr = [];
    for (let i = 0; i <= arr.length; i++){
        revArr.push(arr[arr.length - 1 - i])
    };
return revArr;
};