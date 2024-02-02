// Printing type
console.log("Printing Name = Ajmain");

// variable declaring and Console printing
name = "Ajmain";
let age = 24;
x = null;
y = undefined;
isfollow = true;
console.log(name,age,x,y,isfollow); // string

// Solid way to use keyword  'let', 'var & 'const'

var name1= "Ajmain" ; // Redeclared var many times. Not recommended.
age = 25; //Can't redeclared  let many times.  It will give error if you try to declare it again. Recommended for using it.

const city ="Dhaka"; //  Const can not be reassigned but its property can be changed.

let country="Bandladesh"; // Let is the best one for single time declaration. It allows you to declare a variable that is local to an entire block rather than just a function.

console.log(`My name is ${name} and I am ${age} years old. I live in ${city}. I am from ${country}.`);

// Block global varriable declare and local declare

let a = 10; // can be used anuwhere
console.log(a);

{
    let a = 5; // only used in this block
    console.log(a);
}
console.log(a); // it prints 10 because global variable contains 10.

// Objects -> Collection of values
// Key : Value {Pair} using bracckets

const student = {
    name: "Ajmain",
    age,
    cgpa: 3.5,
    isPass: true,
}
console.log(student)
console.log(student.name + " is "+ (student.isPass ? "passed":"failed")+ " the exam with CGPA-"+ student.cgpa)
console.log(student.name + "\n"+ student.age+ "\n" + student.cgpa +"\n" + student.isPass)

// Accessing object properties
student.age = student.age + 1;
console.log(student.age);

// delete student.age; // delete the property
// console.log(student.age);

student["age"] = student["age"] + 10;
console.log(student["age"])

// Accessing object properties

console.log("Accessing object properties");
console.log(student["name"]); // It will print Ajmain

// Arrays -> collection of value with same type
// [] - bracket notation
// .   - dot notation

const arr = [2,4,6,8];

console.log(arr[0]); // Prints 2
console.log(arr.length); // Prints the length of array which is 4

for (let i=0 ;i<arr.length; i++) {
    console.log(arr[i])
} //loop to print all values in array

// Methods / functions inside objects/arrays

const person = {        
    firstName:"Ajmain",    
    lastName:"Akash",            
    getFullName:function() {          
        return `${this.firstName} ${this.lastName}`;                  
    },                     
};              

console.log(person.getFullName()); // Output John Doe

// Object constructor function

function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;

    this.introduce = function(){
        console.log(`Hello! My name is ${this.firstName} ${this.lastName}.`);
    }
}

const john = new Person('John', 'Doe');
john.introduce(); // Output Hello! My name is John Doe.


// Inheritance / Prototypal inheritance
Person.prototype.gender = "Male"; 

//object declare
const students = {
    course : "Computer Science"
};

Object.setPrototypeOf(students, Person.prototype);

console.log(students.course) // Output Computer Science
console.log(students.gender) // Output Male

// Inheritance in JavaScript using Constructor Functions and Prototypes
Person.prototype.greeting = "Hi there!";

const employee = new Person("Jane","Smith");
employee.introduce = function () {
    console.log (`${this.greeting}, I am an employee.`);
};  
employee.introduce(); // Hi there!, I am an employee.   

// Classical Inheritance (using the extends keyword)
class Animal {      
    constructor(name) {        
        this.name = name;        
    }    
    speak() {                        
        return `${this.name} makes a sound.`;                    
    }        
}          

class Dog extends Animal {                        
    speak() {                                   
        return super.speak() + ` Woof!`;                    
    }                    
}                      

let myDog = new Dog("Buddy");                                
console.log(myDog.speak()); // Buddy makes a sound. Woof!   

//printing types of data  with typeof operator
console.log(`The type of undefined is ${typeof undefined}`);
console.log(`The type of null is ${typeof null}`);

let strVar = "I am a string.";
console.log(`The type of strVar is ${typeof strVar}`);

let numVar = 47;
console.log(`The type of numVar is ${typeof numVar}`);

let objVar = {};
console.log(`The type of objVar is ${typeof objVar}`);
     
console.log(typeof myDog);