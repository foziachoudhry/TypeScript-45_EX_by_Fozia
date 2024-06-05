//creat a function
function car_details(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Car object with manufacturer, model,
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function
var myCar = car_details("Toyota", "Corrolla", "color: Black", "Car_AirCondition: true", "year: 2022");
//
console.log(myCar);
