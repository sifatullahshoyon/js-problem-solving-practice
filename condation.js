//* একটি সংখ্যা দেওয়া আছে। চেক করো সেটি Even না Odd।
// let number = 3;
// if (number === 0) {
//   console.log(number + " is 0");
// } else if (number % 2 === 0) {
//   console.log(number + " is Even");
// } else {
//   console.log(number + " is Odd");
// }

/* Positive, Negative or Zero

একটি সংখ্যা দেওয়া আছে। প্রিন্ট করো:

Positive যদি 0 এর বড় হয়।

Negative যদি 0 এর ছোট হয়।

Zero যদি 0 এর সমান হয়। */

// let number1 = -1;
// if (number1 === 0) {
//   console.log(number1 + " is Zero");
// } else if (number1 > 0) {
//   console.log(number1 + " is Positive");
// } else if (number1 < 0) {
//   console.log(number1 + " is Negative");
// }

/**
 * Vote Eligibility
বয়স ইনপুট হিসেবে দেওয়া থাকবে। যদি বয়স 18 বা তার বেশি হয়, তাহলে Eligible for voting প্রিন্ট করবে, না হলে Not eligible।
 * **/

// let age = 19;
// if (age === 0) {
//   console.log("Age can't be 0");
// } else if (age >= 18) {
//   console.log("Eligible for voting");
// } else if (age < 18) {
//   console.log("Not eligible");
// }

// * দুটি সংখ্যা দেওয়া আছে। বড় সংখ্যাটি প্রিন্ট করো।

// let num1 = 150;
// let num2 = 151;

// if (num1 === num2) {
//   console.log("Both numbers are equal");
// } else if (num1 > num2) {
//   console.log(num1 + " is the largest number");
// } else if (num2 > num1) {
//   console.log(num2 + " is the largest number");
// }

// * Grade Calculator

/**

একটি নম্বর দেওয়া আছে (0-100)।

80+ → A+

70-79 → A

60-69 → A-

50-59 → B

এর কম হলে Fail।
 * **/

// let marks = 55;
// if (marks > 100 || marks < 0) {
//   console.log("Invalid marks");
// } else if (marks >= 80 && marks <= 100) {
//   console.log("A+");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("A");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("A-");
// } else if (marks >= 50 && marks <= 59) {
//   console.log("B");
// } else {
//   console.log("Fail");
// }

// * Leap Year Checker

// const year = 1900;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log(year + " is a leap year");
// } else {
//   console.log(year + " is not a leap year");
// }

// * Login Validation

// const username = "admin";
// const password = "12345";

// if (username === "admin" && password === "12345") {
//   console.log("Login successful");
// } else {
//   console.log("Invalid username or password");
// }

// * Number Range Check

// * একটি সংখ্যা ইনপুট দেওয়া আছে। যদি 10 থেকে 20 এর মধ্যে হয়, প্রিন্ট করো In range, না হলে Out of range।

// let inputNumber = 9.5;

// if (inputNumber >= 10 && inputNumber <= 20) {
//   console.log("In range");
// } else {
//   console.log("Out of range");
// }

//* Three Number Largest

//? তিনটি সংখ্যা দেওয়া আছে। সবচেয়ে বড় সংখ্যাটি বের করো।

// let a = 3000;
// let b = 6200;
// let c = +1200;

// if (a > b && a > c) {
//   console.log(a + " is the largest number");
// } else if (b > a && b > c) {
//   console.log(b + " is the largest number");
// } else {
//   console.log(c + " is the largest number");
// }

/**
 * Traffic Light

একটি string ইনপুট ( "red", "yellow", "green" )।

যদি "red" → Stop

যদি "yellow" → Wait

যদি "green" → Go।
(Hint: switch case ব্যবহার করো)
 * **/

const signal = "blue";

// switch (signal) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Wait");
//     break;
//   case "green": {
//     console.log("Go");
//     break;
//   }
//   default:
//     console.log("Invalid signal color");
// }

// if (signal === "red") {
//   console.log("Stop");
// } else if (signal === "yellow") {
//   console.log("Wait");
// } else if (signal === "green") {
//   console.log("Go");
// } else {
//   console.log("Invalid signal color");
// }

//* Season Finder

/**ইনপুট হবে একটি মাসের নাম বা নম্বর।

প্রিন্ট করো কোন season (উদাহরণ:

December, January, February → Winter

March, April, May → Spring

June, July, August → Summer

September, October, November → Autumn **/

// const month = "december";

// switch (month.toLocaleLowerCase()) {
//   case "december":
//     console.log("winter");
//   case "january":
//     console.log("winter");
//   case "february":
//     console.log("winter");
//     break;
//   case "march":
//     console.log("spring");
//   case "april":
//     console.log("spring");
//   case "may":
//     console.log("spring");
//     break;
//   case "june":
//     console.log("summer");
//     break;
//   case "july":
//     console.log("summer");
//   case "august":
//     console.log("summer");
//     break;
//   case "september":
//     console.log("autumn");
//   case "october":
//     console.log("autumn");
//   case "november":
//     console.log("autumn");
//     break;
//   default:
//     console.log("Invalid month");
// }

const month = "february";

switch (month.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;

  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;

  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;

  case "september":
  case "october":
  case "november":
    console.log("Autumn");
    break;

  default:
    console.log("Invalid month");
}

/**
 * Vowel or Consonant

ইনপুট হবে একটি letter।

যদি vowel (a, e, i, o, u) হয় → Vowel

অন্যথায় → Consonant
 * 
 * **/

const latter = "p";

switch (latter.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
