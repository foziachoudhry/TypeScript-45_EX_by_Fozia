let number = [1,2,3,4,5,6,7,8,9];

//for.loop
for(let number1 of number){
	let ordinalEnding: string;

	if(number1 === 1){
		ordinalEnding ="st"
	}
	else if(number1 === 2){
		ordinalEnding ="nd"
	}
	else if(number1 === 3){
		ordinalEnding ="rd"
	}
	else{
		ordinalEnding ="th"
	} console.log(`${number1}${ordinalEnding}`);
}