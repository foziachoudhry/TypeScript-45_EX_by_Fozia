//make a function
function show_magicians(magicians: string[]){
	magicians.forEach(name => console.log(name));
}
// Make function through map it will modify array
function make_great(magicians:string[]){
	return  magicians.map(name => `The Great ${name}`);
}
//Make a Array of magicion name
let magician_names = ["HARRY POTER","RICKYJAY","YAEESH"]

// Calling function make_great with modified magicions name
let great_magicions = make_great(magician_names);

//Calling show_magicions with modified list
show_magicians(great_magicions)

