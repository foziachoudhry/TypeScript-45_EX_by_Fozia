let myName:string="fozia choudhry";

//print in lowercase

console.log(myName.toLowerCase());

//print in uppercase

console.log(myName.toUpperCase());

//title case

console.log(myName.replace(/\b\w/g,(char)=>char.toUpperCase()));