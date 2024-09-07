// ANSWER 01

var city = prompt("Please enter your city name:");

if (city === "karachi") {
    alert("Welcome to the city of lights.");
} else {
    alert("Welcome to " + city.charAt(0).toUpperCase() + city.slice(1) + ".");
}

// ANSWER 02

var gender = prompt("Enter Your Gender Here:");

if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma’am.");
} else {
    alert("Invalid Input, Please Enter Valid Gender");
}

// ANSWER 03

let signalColor = prompt("Enter The Color Of The Traffic Signal:");

if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to Move");
} else if (signalColor === "green") {
    alert("Move Now");
} else {
    alert("Invalid color. Please enter Red, Yellow, or Green.");
}

// ANSWER 04 


let remainingFuel = prompt("Enter The Remaining Fuel In Your Car (In Litres):");

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You Are Rich");
}

// ANSWER 05

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

// ANSWER 06


var subject1 = (prompt("Enter Obtained Marks in Subject 1:"));
var subject2 = (prompt("Enter Obtained Marks in Subject 2:"));
var subject3 = (prompt("Enter Obtained Marks in Subject 3:"));
var totalMarks = (prompt("Enter total marks:"));

let obtainedMarks = subject1 + subject2 + subject3;

let percentage = (obtainedMarks / totalMarks) * 100;

let grade;
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}


document.write("<h2>Results:</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");


// ANSWER 07

var secretNumber = 5;  // You can choose any number between 1 and 10

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} 

else if (userGuess + 1 === secretNumber) {
    alert("You Are Too Close. Try Again");
} 

else {
    alert("Try again. The secret number was " + secretNumber + ".");
}

// Answer 08

var number = prompt("Enter Any Number:");

if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
} else {
    alert("The number " + number + " is not divisible by 3.");
}

// ANSWER 09


var number = prompt("Enter a Number:");

if (number % 2 === 0) {
    alert("The number " + number + " is an even number.");
} else {
    alert("The number " + number + " is an odd number.");
}

// ANSWER 10


var temperature = parseFloat(prompt("Enter The Temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's really cold today!");
}


// ANSWER 11


var num1 = prompt("Enter The First Number:");
var num2 = prompt("Enter The second Number:");
var operation = prompt("Enter The Arithmetic Operations:");


var result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero.";
    }
} else if (operation === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        result = "Error: Modulus by zero.";
    }
} else {
    result = "Invalid operation.";
}

// Display the result
alert("The result is: " + result);
