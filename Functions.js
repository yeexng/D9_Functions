/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1,l2) {
    return l1 * l2
}

console.log(area(3,3))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazysum(n1,n2) {
    if (n1 === n2) {
        return (n1+n2)* 3
    } 
    
    else{
        return n1 + n2
    }
    
}

console.log(crazysum(2,3))
console.log(crazysum(2,2))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(n1) {
    if (n1 > 19) {
        return Math.abs(n1 - 19) * 3
    } else {
    return Math.abs(19 - n1)
    }
}

console.log(crazyDiff(29))
console.log(crazyDiff(3))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {

    if (n < 20) {
        return false ;
    } else if ((n <= 100) || (n === 400)) {
        return true ;
    } else {
      return false ;
    }
    }
    
   console.log(boundary(15))
   console.log(boundary(20))
   console.log(boundary(100))
   console.log(boundary(400))
   console.log(boundary(401))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (str) {
    if (str.startsWith("Strive") /* true / false */) {
      return str;
    } else {
      return "Strive " + str;
    }
  };

  console.log(strivify("Strive school"))
  console.log(strivify("Shop"))
  

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(n) {
    let remainderOf3 = n % 3;
    let remainderOf7 = n % 7;

    if ((remainderOf3 === 0) || (remainderOf7 === 0)) {
        return "is multiple of 3 or 7"
    } else {
        return "is not a multiple of  3 nor 7"
    }

}

console.log(check3and7(9))
console.log(check3and7(49))
console.log(check3and7(100))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(String) {
    let newString = "";
    for (let i = String.length - 1; i >= 0; i--){
        newString += String[i];
    }
    return newString;
}

let result = reverseString("PneumonouPneumonoultramicroscopicsilicovolcanoconiosis") ;
console.log(result)

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirstPhrase = function(str) { //phrase as param
    let words = str.split(" ")
    let finalString = []
    for(let i = 0; i < words.length; i++) {
      let firstChar = words[i].charAt(0)
      console.log(firstChar)
      let uppercaseChar = firstChar.toUpperCase()
      let cutString = words[i].slice(1)
      let finalWord = uppercaseChar + cutString
      finalString.push(finalWord)
    }
    console.log(finalString.join(""))
  }
  
  upperFirstPhrase("Bello worlddddd!!")

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(str) {

    let withoutFirstandLast = str.substring(1,str.length -1);

    console.log(withoutFirstandLast);
    
}

cutString("thisissoharddddd")

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

let giveMeRandom = function (n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 11));
    }
    return arr;
  };
  console.log(giveMeRandom(5));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
