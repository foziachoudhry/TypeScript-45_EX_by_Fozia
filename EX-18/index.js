"use strict";
//making a arrayof countries and print its orginal order
let CountriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("orginal order:", CountriesTovisit);
//print the array in Alphabetical order without medifying the actual  array list
console.log("Alphabetical Order:", [...CountriesTovisit].sort());
//Show that your array is still in its original order by printing it.
console.log("Still in orginal order:", CountriesTovisit);
//Print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse order:", [...CountriesTovisit].reverse());
//Show that your array is still in its original order by printing it.
console.log("Still in orginal order:", CountriesTovisit);
//we have changed the orginal Array order now
console.log("Orginal Array Reversed:", CountriesTovisit.reverse());
//Print the array to show that it`s orginalorder
console.log("Back to orginal Order:", CountriesTovisit.reverse());
//Print the array to show that its order has been changed in Alphabetical order now
console.groupCollapsed("sorted in Alphabetical Order:", CountriesTovisit.sort());
//we have changed the orginal Array order now in reverse order again
console.log("Orginal Array Reversed:", CountriesTovisit.reverse());
