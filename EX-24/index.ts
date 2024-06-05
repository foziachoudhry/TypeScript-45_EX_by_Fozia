// Defaine Variables
let orange = "orange";
let uppercaseOrange = "ORANGE";
let ten = 10;
let twenty = 20;
let colors =["pink","bule","black"];

// Test for equality and inequality with strings

console.log("Is orange is equal to orange ?");
console.log(orange == "orange");

console.log("\nIs orange is not equal to orange");
console.log(orange != "orange");

// Test using the lower case function
console.log("\nIs ORANGE is equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() == "orange");

console.log("\nIs ORANGE is not equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() != "orange");

//Numerical test
//Equle to
console.log("\nIs ten is equal to twenty ?");
console.log(ten == twenty);

//not Equal
console.log("\nIs ten is not equal to twenty ?");
console.log(ten != twenty);

//Greater than
console.log("\nIs ten is greater than zero ?");
console.log(ten > 0);

//Less than
console.log("\nIs twenty is less than 10");
console.log(20 < 10);

//Greater than or Egual to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >=5);

// less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10);

//tests using "and" & "or" Operators
//using &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10 );

console.log("\n twenty is not equal to 10 and twenty is greater than 25");
console.log(twenty != 10 && twenty > 25);

//using || (OR)
console.log("\n 20 is greater than 50 OR 20 isequal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//test whether an item is include in array
let fruits = ["apple","orange","mango"]
console.log("\norange is include in my fruits array");
console.log(fruits.includes("orange"));
//test whether an item is include in array
console.log("\norange is not include in my fruits array");
console.log(!fruits.includes("orange"));