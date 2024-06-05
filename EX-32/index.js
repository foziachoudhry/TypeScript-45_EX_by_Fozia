"use strict";
//Array of current_users
let current_users = ["Yaeesh", "Shanzay", "Diyan", "Fabiha", "Azeem"];
//Array of new_users
let new_users = ["Ali", "Umar", "Usman", "Fabiha", "azeem"];
//loop through to chack for username avaibility
new_users.forEach(new_one_user => {
    //making a condition
    let condition = current_users.some(curren_one_user => curren_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase());
    if (condition) {
        console.log(`Sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`This username $ {new_one_user is available}`);
    }
});
