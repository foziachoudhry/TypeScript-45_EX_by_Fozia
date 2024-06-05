"use strict";
//Array 
let userName = ["Yaeesh", "Shanzay", "Diyan", "Admin", "Fabiha"];
//Remove all of the usernames from your array, 
userName = [];
// if statmet for checking lenght of Array is empty?
if (userName.length === 0) {
    console.log("Your Array is Empty we need to find some user");
}
else {
    // if Array is not empty use ForEach loop 
    userName.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`\nHello ${oneUser},would you like to see a status report?`);
        }
        else {
            console.log(`\nHello ${oneUser},thank you for logging in again.`);
        }
    });
}
