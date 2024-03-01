// Functions And Methods

function printNews() {
    //without  parameters, can be called anywhere in the code.
    console.log("This is a news article");
    console.log("This Function wont  do anything if you dont call it.");
}

printNews(); // Call Function

function printNew(msg) {
    //with  parameters, can be called anywhere in the code.
    console.log(msg);
}

printNew("Testing message."); // Call Function

//Sum Function
function sum(x, y) {
    s = x + y;
    return s;
}

let val = sum(3, 3);
console.log(val);

//Arrow Function
const add = (a, b) => {
    console.log(a + b);
    // console.log(add(4,4));
};
add(3, 5);

// Vowel Check Function
function checkVowels(str) {
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) != -1) {
            console.log("The character '" + str[i] + "' is a vowel");
        } else {
            console.log("The character '" + str[i] + "' is not a vowel");
        }
    }
}
checkVowels("Hello World!");

//------------------------------
function countChars(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
    return count;
}

countChars('Iloveyouu')

//Arrow
const countCharArrow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
    return count;
}
countCharArrow('Ajmain');


//Methods foreach loop Higher order
let num = [1, 2, 3, 4, 5];

num.forEach((item) => {
    console.log(`Item Square: ${item * item}`);
});

console.log('\n\n');

//or

let calcSquare = (item) => {
    console.log(`Item Square: ${item * item}`);
}

num.forEach(calcSquare);

//Map used for creating new array. Not working in the existing array
let newArr = num.map((item) => {
    return item;
});
console.log(newArr);

//Filter method
let arr = [1,2,3,4,5,6,7,8,9];

let iseven = arr.filter((val) => {
    return val % 2 == 0;
});
console.log(iseven);

arr.sort(); //Sorts the array in alphabetical order
console.log(arr);

arr.reverse(); //reverse the array in alphabetical order
console.log(arr);