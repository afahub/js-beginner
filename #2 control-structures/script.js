document.write("Welcome to CS");
// 1. Sequence
// 2. Conditional structure
// 3. Loops

// Write a program that will alert me to get an umbrela if it is going to rain today
// criteria: temperature in celsius

// const ROOM_TEMPERATURE = 25;
// // if temperate is below room temperature.
// // then it will rain
// // else it won't rain
// let temperature = prompt("Enter temperature in celsius");

// if (temperature < ROOM_TEMPERATURE) {
//   alert("Get an umbrella today. It's going to rain");
// } else {
//   alert("It's not going to rain today");
// }

// 3. Loops
var fruits = ["Banana", "Apple", "Mango", "Cherry", "Orange"];
fruits = "Banana, Apple, Mango,";

// For loops

document.write("<h4>For Loops</h4>");
for (i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}
document.write("<br>");
// while
document.write("<h4>While Loops</h4>");

var j = 0;
while (j < fruits.length) {
  document.write(fruits[j] + "<br>");
  j++;
}

document.write("<br>");
// while
document.write("<h4>Do While Loops</h4>");
// do while loops

var k = 0;
do {
  document.write(fruits[k] + "<br>");
  k++;
} while (k < fruits.length);
