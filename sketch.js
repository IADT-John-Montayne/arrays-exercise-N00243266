function setup() {
    createCanvas(500, 500);
    background(55);
    rectMode(CENTER);
}
 
function draw() {
    rect(250, 250, 100, 100);
}
 
let fruits = ["apple", "banana", "orange", "pear"];
 
// for (let fruit of fruits) {
//  console.log(fruit);
// }
 
// fruits.splice(1,1, "pear");
//fruits[1] = "aaa"
//////////////////////////////////////  EXERCISE  //////////////////////////////////////////
 
 
//READ FROM THE ARRAY
 
 
//log the first fruit
console.log(fruits[0]);
 
//log the last fruit
console.log(fruits[fruits.length - 1]);
 
 
//MODIFY THE BASKET
 
//replace banana w kiwi
let bananaIndex = fruits.indexOf("banana");
 
if (bananaIndex !== "-1" ) {
 fruits[bananaIndex] = "kiwi";
}
console.log(fruits);
 
//remove the last ruit
fruits.pop();
console.log(fruits);
 
//add mango to the start
fruits.unshift("mango");
console.log(fruits);
 
//loop through the basket
//use a for loop to log every fruit in this format
 
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}
 
 
//SEARCH FOR THE FRUIT
 
//check if orange exists
//if it exits, log orange found at index x
//if doesnt - orange not found
let orangeIndex = fruits.indexOf("orange");
 
if (orangeIndex !== -1) {
  console.log("orange found at index " + orangeIndex);
} else {
  console.log("orange not found");
}
 
 
 
//COPY PART OF THE BASKET
 
//create array called citrus
//it should contain only middle of 2 fruits
//the original basket array must not change
//USE MODULES % if the number is odd, log one middle number
 
 
let citrus = [];
let middle = fruits.length / 2;
if (fruits.length % 2 !== 0) {
 // Odd number: one middle fruit
 citrus.push(fruits[Math.floor(middle)]);
} else {
 // Even number: two middle fruits
 citrus = fruits.slice(middle - 1, middle + 1);
}
console.log("citrus: " + citrus);
 
//checking the og array
console.log("original fruits: " + fruits);
