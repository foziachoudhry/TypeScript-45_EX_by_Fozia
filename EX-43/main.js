"use strict";
//make a function
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Make function through map it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//Make a Array of magicion name
let magician_names = ["HARRY POTER", "RICKYJAY", "YAEESH"];
//making a copy of array with slice function
let copy_magician_names = magician_names.slice();
//nodify the copied array 
let copy_great_magicians = make_great(copy_magician_names);
//show original and copied both array
//original 
console.log("Original\n");
show_magicians(magician_names);
// Copy 
console.log("\nCopy\n");
show_magicians(copy_great_magicians);
