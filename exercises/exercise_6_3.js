function calculateWithIfElse(num1, num2, operator) {
  let res;
  if (operator == "+") {
    res = num1 + num2;
  } else if (operator == "-") {
    res = num1 - num2;
  } else {
    res = num1 + num2;
  }
  return res;
}
// Assignment. Compute the result for other operators
function calculateWithSwitch(num1, num2, operator) {
  let res;
  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    default:
      res = num1 + num2;
  }
  return res;
}
const result = calculateWithSwitch(3, 4, "+");
console.log(result);
