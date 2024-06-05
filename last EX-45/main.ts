//creat a function
function car_details(manufacturer, model, ...options){
	//Car object with manufacturer, model,
 let car = {
	manufacturer:manufacturer,
	model:model,
 };
 
 // Options to the car object
options.forEach(option => {
	let [key, value] = option.split(":");
	car[key.trim()] = value.trim();
});

return car;

}
//Call the function
let myCar = car_details("Toyota","Corrolla","color: Black","Car_AirCondition: true","year: 2022");

//
console.log(myCar);