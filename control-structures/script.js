document.write("Welcome to CS");
// 1. Sequence
// 2. Conditional structure
// 3. Loops

// Write a program that will alert me to get an umbrela if it is going to rain today
// criteria: temperature in celsius

const ROOM_TEMPERATURE = 25;
// if temperate is below room temperature.
// then it will rain
// else it won't rain
let temperature = prompt("Enter temperature in celsius");

if (temperature < ROOM_TEMPERATURE) {
  alert("Get an umbrella today. It's going to rain");
} else {
  alert("It's not going to rain today");
}
