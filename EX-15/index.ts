let guestList = [ "Fozia","Shanzay","Yaeesh","Azeem"];

let dontCome = guestList[0];

console.log(dontCome, "she will not come in this dinner");

guestList.splice(0,1, "Waseem");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me ?`));