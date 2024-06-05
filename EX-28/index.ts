// person is less than 2 years old,
let age = 20;

if (age< 2){
	console.log("your are a Baby.");
}

//person is at least 2 years old but less than 4,
else if(age >= 2 && age < 4){

console.log("your a toddler.");
}
// person is at least 4 years old but less than 13,
else if(age >= 4 && age < 13){
	console.log("you are a kid.");
}

//person is at least 13 years old but less than 20,
else if(age >= 13 && age < 20){
	console.log("you are a teenager.");
}

//person is at least 20 years old but less than 65,
else if(age >=20 && age < 65){
	console.log("you are an adult.");
}

// person is age 65 or older,
else if (age >= 65 ){
	console.log("you are an elder.")
}