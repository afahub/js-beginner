// an array of fruits

const fruits = [
  "apple",
  "banana",
  "orange",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "passionfruit",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon",
];

// fruits.forEach(function (fruit) {
//   document.write("<p>" + fruit + "</p>");
// });
const printFruits = (fruit, index) => document.write("<p>" + fruit + "</p>");

// using arrow function for printing fruits
// fruits.forEach(printFruits);

// array.find method to search for a fruit
// orange

// const indexOfOrange = fruits.findIndex((fruit) => fruit === "orange");

// document.write(indexOfOrange);

// map method returns a new array

let prefixFruits = fruits.map((fruit) => "fruit: " + fruit);

document.write(prefixFruits.join(""));
