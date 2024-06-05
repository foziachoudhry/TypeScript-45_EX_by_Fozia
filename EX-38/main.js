"use strict";
//Function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
//Calling Function
describe_city("Karachi");
describe_city("Multan");
describe_city("Makkah", "Saudi Arabia");
