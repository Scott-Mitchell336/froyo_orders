//
// script.js
// Created by Scott Mitchell on 01/30/2025
// Block 15 - Froyo Orders
//

// take the array of flavors and create the order
function createOrder(flavors) {
  const froyo_order = {};

  // loop through the flavors and add them to the order
  for (let i = 0; i < flavors.length; i++) {
    // checkk if the flavor is already in the order
    if (froyo_order[flavors[i]]) {
      froyo_order[flavors[i]] += 1;
    } else {
      // not already in the order so add it
      froyo_order[flavors[i]] = 1;
    }
  }
  return froyo_order;
}

function convertUserInputIntoArray(userInputString) {
  // Split the string of strings into an array of strings.
  const stringArray = userInputString.split(",");

  // Convert the array of strings into an array of strings.
  const flavors = [];
  for (let i = 0; i < stringArray.length; i++) {
    // trim the white space from the beginning and end of the string.
    const flavor = stringArray[i].trim();
    // oush into the array
    flavors.push(flavor);
  }
  return flavors;
}

// Prompt the user for a list of stringss separated by commas.
const userInputString = prompt(
  "Please enter some froyo flavors you would like to order (please seperate each flavor with a comma):"
);
// convert the user eneterd sring into an array of flavors ordered
flavors = convertUserInputIntoArray(userInputString);

console.log(flavors);
// create the order
froyo_order = createOrder(flavors);

console.log(froyo_order);
