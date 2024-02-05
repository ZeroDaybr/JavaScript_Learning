// Operators and conditional Statements

//Arithmetic operators
let num1 = 10;
let num2 = 5;

console.log(" a =",num1, "& b =",num2)
console.log(" a + b =",num1 + num2)
console.log(" a + b =",num1 - num2)
console.log(" a + b =",num1 * num2)
console.log(" a + b =",num1 / num2)
console.log(" a + b =",num1 % num2)
console.log(" a ** b =",num1 ** num2)

//Conditional Statements

//if Statement
let age = 25;

if(age > 18){
    console.log("You are an adult");
}else{
    console.log("You are not an adult")
}   

//Switch statement
let grade = 'B';
switch (grade) {
    case 'A':
        console.log('Grade A');
        break;
    case 'B':
        console.log('Grade B');
        break;
    case 'C':
        console.log('Grade C');
        break; 
    default:
        console.log("Not exists.")
        }

// Dark and White mode Example
let mode = "dark";
let color;

if(mode === 'dark'){
    color = 'Dark';
}
else if(mode === 'white'){
    color = 'white';
}
else{
    console.log("Error...! Loading...!")
}
console.log(color);

//Odd Even Example

let num = 2;

if(num%2 === 0){
    console.log('Even');
}
else{
    console.log("Odd");
}

//ternary operation
let result = age > 18 ? 'adult' : 'Not adult';
console.log(result);

// Alert
// alert("Hello");

//take input from prompt 
let a = prompt(" Enter A Number : ")
if(a % 5 === 0){
    console.log("Multiple of 5 : ",a)
}

let score = 75;
let grades;

if(score >= 90 && score <=100){
    grades = "A";
} else if (score >=70 && score <=89){
    grades = "B";
} else if (score >=60 && score <= 69){
    grades = "C";
} else if(score >= 50 && score <= 59){
    grades = "D";
} else if (score >= 0 && score <= 49){
    grades = 'F';
}
console.log(grades);
