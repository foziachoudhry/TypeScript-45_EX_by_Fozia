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
//inform that only two guests can be invited for dinner
console.log("unfortunately new dinner table won’t arrive in time for the dinner, and now I can invite only two guests to dinner with me.");
//using while-loop to remove guests from the array until only tow name remain
while (guestList.length > 2) {
    let removeguest = guestList.pop();
    console.log(`sorry, ${removeguest} i can’t invite you to dinner.`);
}
//sending a invitation to the last two guest on the list
console.log("invitation to the last 2 Guests");
guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo},you are still invited to dinner`));
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
