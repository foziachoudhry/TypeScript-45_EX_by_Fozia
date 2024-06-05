"use strict";
//creating a Array
let userName = ["Yaeesh", "Shanzay", "Diyan", "Admin", "Fabiha"];
// Using ForEach loop 
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`\nHello ${oneUser},would you like to see a status report?`);
    }
    else {
        console.log(`\nHello ${oneUser},thank you for logging in again.`);
    }
});
