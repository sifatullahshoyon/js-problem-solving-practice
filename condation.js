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

const year = 2024;

if (year % 4 === 0) {
  if (year % 100 !== 0) {
    console.log(year + " is a leap year");
  }
} else if (year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
