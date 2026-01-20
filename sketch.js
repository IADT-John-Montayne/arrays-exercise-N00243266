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
// 	console.log(fruit);
// }

// fruits.splice(1,1, "pear");
//fruits[1] = "aaa"
/////////////////////////////////////////////////////////////////////

//log the first fruit
console.log(fruits[0]);

//log the last fruit
console.log(fruits[fruits.length - 1]);

//replace banana w kiwi
let bananaIndex = fruits.indexOf("banana");

if (bananaIndex !== "kiwi" ) {
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

//use a for loop to log every ruit in this format 

