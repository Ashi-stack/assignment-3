// Question 1
//prints numbers from 1 to 10
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// //Call Function
printNumbers();




// // Q:2 Multiplication table (1–10)

function printTable() {
    let num = parseInt(prompt("Enter a number for Table:"));

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
// //Call Function
printTable();




// // Q:3 Check whether a number is prime
function checkPrime() {
    let num = parseInt(prompt("Enter a number for check prime:"));
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num ; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(num + " is a Prime Number");
    } else {
        console.log(num + " is NOT a Prime Number");
    }
}
// //Call Function
checkPrime();




// Q:4 Function that returns square of a number
function square(num) {
    return num * num;
}
// //Call Function
console.log("Square is:", square(5));
console.log("Square is:", square(7));




// Q:5 Function for sum, subtraction, multiplication
function calculate(a, b) {
    console.log("Sum:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}
// //Call Function
calculate(10, 5);




// Q:6 Take five numbers, find total and average
function totalAndAverage() {
    let total = 0;

    for (let i = 1; i <= 5; i++) {
        let num =parseInt(prompt("Enter number " + i + ":"));
        total += num;
    }

    let average = total / 5;

    console.log("Total:", total);
    console.log("Average:", average);
}
// //Call Function
totalAndAverage();




// Q:7 Student Grading System
function gradingSystem() {
    let marks =parseInt(prompt("Enter student marks:"));
    let grade;

    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    console.log("Grade:", grade);
}
// //Call Function
gradingSystem();