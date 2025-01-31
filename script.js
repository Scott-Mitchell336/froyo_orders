// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some froyo flavors you would like to order (please seperate each flavor with a comma):"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
  const flavor = stringArray[i].trim();
  flavors.push(flavor);
}

console.log(flavors);

const froyo_order = {};

for (let i = 0; i < flavors.length; i++) {
  if (froyo_order[flavors[i]]) {
    froyo_order[flavors[i]] += 1;
  } else {
    froyo_order[flavors[i]] = 1;
  }
}

console.log(froyo_order);
