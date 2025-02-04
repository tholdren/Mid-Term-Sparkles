// ✅ Add External ColorKit Library
// Color Kit Library
// https://codepen.io/manikoth/pen/NPKVOxm.js

// Get Stuff

// Set variable for HTML `body` element

const body = document.querySelector("body");

// ✅ Check-Check: log out the `body` element in the console

console.log(body);

// ✅ Check-Check: get and attach the node for the background color with `.style.backgroundColor`

// Set Stuff

// ✅ Check-Check: assign a background color to "hard code it"
// Hint: Is the color a string, number, or boolean?

body.style.backgroundColor = "red";

// dynamically set backgound color with `colorkit.random()` function/method

body.style.backgroundColor = colorkit.random();

// Sparkle effect for funzies
// replace❓ with variable for the `body` element
// colorkit.sparkle( ❓);

colorkit.sparkle(body);