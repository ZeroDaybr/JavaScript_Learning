//Array

let marks = [20,25,30,40];
console.log(marks.length)

console.log(marks);

console.log(marks[1]);//accessing the second element of array using index 1

marks[3]='60';//adding a new element to the array
console.log(marks);

marks.push('70');//adds an element at last position in array
console.log(marks);

let fruits=['apple','banana','orange'];
fruits.unshift('grapes');//adds elements from beginning of array

console.log(fruits);

let deletedItem = fruits.pop();//removes the last element from array
console.log('Deleted Item = ',deletedItem);
console.log(fruits);

fruits.shift();//removes the first element from array
console.log(fruits);

console.log(typeof marks);//returns type of variable marks i.e.,

let numbers=[9,8,7, 6,5,4,3,2,1];
numbers.reverse();//reverses the order of array
console.log(numbers);

let superpower = ['Superman','Ironman','Batman','AntMan',"Captain","Thor",'Hulk'];
superpower.sort();//sorts the array alphabetically
console.log(superpower);

// Array Print Using For Loop
for(let i= 0; i < superpower.length; i++){
    console.log(superpower[i].toUpperCase());
}

// Array Print Using For of Loop
for(let power of superpower){
    console.log(power.toLowerCase());
}
           
// Practice Prgram of Add total Marks
let totalMarks = [50, 60, 70, 80, 90, 100];

let sum = 0;

for (mark of totalMarks) { 
    sum += mark; // Adding each value to sum  
}  

console.log("The sum is " + sum); // Normal Printing  
console.log(`The sum is = ${sum}`); // Template Literals

// 10% Off in every index
let  originalPrice = 1000;
let discountedPrice = originalPrice * .10;
console.log('Original Price: ',originalPrice);
console.log('Discounted Price:',discountedPrice);

// 10% OFF USING  LOOPS
let  priceList = [1000,2000,3000,4000,5000];

for(let i=0 ; i < priceList.length; i++)
{
     console.log(`Initial Price = ${priceList[i]}`);
     let discountPercentage = .10;
     let discountAmount = priceList[i] * discountPercentage;
     priceList[i] = priceList[i] - discountAmount;
     console.log(`For product ${i+1}, The Discount Amount is :${discountAmount} and Final Price is : ${priceList[i]}`);
}

//Concat add two arrays together
let newArray = totalMarks.concat(priceList); //Can be concat multiple  array at once like this -> totalMarks.concat(priceList,anotherArray);
console.log(newArray);

//Slice method to cut a piece of array elements
console.log(newArray.slice(2,5))//particular element slice
console.log(newArray.slice(5)) //starting to endling slice


//Splice method
let arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2,2,10,23); //removing and adding at the same time
console.log(arr);

arr.splice(6,0,5); //adding without removing
console.log(arr);

arr.splice(0,1); //deleted any index
console.log(arr);