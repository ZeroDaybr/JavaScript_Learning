//Loops

//for loop

// for(let count = 1 ; count <= 10; count++){
//     console.log(`Number ${count}`);
// }

let sum = 0;
for(let  i=1; i<=5;i++) {
    sum = sum + i;
    console.log("Sum =",sum)
}

//do while 
let i = 10;
do{
    console.log(i);
    i++;
}while (i<=20);

//while
let j = 1;
while(j < 20){
    console.log(j); 
    j++;
}

//FOR-OF

let  fruits = ["apple","banana","orange"];

for(const fruit of fruits){ 
   console.log(fruit);
}

let  name = 'Ajmain';

for(let val of name){ 
   console.log(name);
}

console.log("\n\n");

// FOR-IN

let person = {name:"John Doe", age:30, city:"New York"};

for(let key in person){
    console.log(`the key = ${key}: object = ${person[key]}`);
}

