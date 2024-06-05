"use strict";
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with following items:\n");
    items.forEach(oneItem => console.log(oneItem));
    console.log("\nEnjoy your sandwich");
}
//Call the function three times, using a different number of arguments each time.
makeSandwich("Bread", "Chiken", "Cheese", "Butter");
makeSandwich("Bread", "Mayo", "lettuce", "Cucumber");
makeSandwich("Bread", "Tamato", "Egg", "Onion");
