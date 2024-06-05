"use strict";
// creating a Array
let guestList = ["Fozia", "Shanzay", "yaeesh", "Azeem"];
// making variable for those guest who cant come
let dontCome = guestList[0];
// print tha name of guest who cant come
console.log(dontCome, "will not come in this diner");
// add or remove from guest list array
guestList.splice(0, 1, "Waseem");
// massage print for bigger table
console.log("Good news ! we have found a bigger table for dinner.");
//adding a new guest name at starting index of array
guestList.unshift("Nadeem");
// adding a new guest name at ending index of array
guestList.push("Fabiha");
// get a middle index of guest list  array
let middleIndex = Math.floor(guestList.length / 2);
//adding a gust name to middle index of array
guestList.splice(middleIndex, 0, "Faheem");
// print a massge of updated list
console.log("Updated List of guests");
//sending a invitation massge to our guests one by one with thier names 
guestList.forEach(oneGuest => console.log(`Salam ${oneGuest},would you like to dinner with me`));
