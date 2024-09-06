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
// Create an array of objects containg {num1, num2, operator}, loop through them
// and call the function to compute the result.
// create a new array to store the result of each iteration.
// output: {operands: {num1, num2}, operator: + or -, result:}

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

const results = [];
for (var i = 1; i < 10; i++) {
  const result = calculateWithSwitch(3, 4, "+");
  results.push(result);
}
//[
//     7, 7, 7, 7, 7,
//     7, 7, 7, 7
//   ]
// const result = calculateWithSwitch(3, 4, "+");
console.log(results);

// nested object

const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  hobbies: [
    {
      name: "Sleeping",
      time: "4pm",
    },
    {
      name: "Happiness",
    },
  ],
  getFullAddress: function () {
    return `${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.zip}`;
  },
};

// name
person.name;
// address
person.address;
// access the street address
person.address.street;
// Array methods.
// instead of using a for loop below.
// 1. use map method to obtain the sane result
//. 2. forEach method
//
// 3. while loops
// 4. use a while loop to obtain the result
// 5. use a do..while loop to obtain the result
// 6. for in
// 7. for of loop
for (let i = 0; i < person.hobbies.length; i++) {
  console.log(
    `${person.name}: ${person.hobbies[i].name} - ${person.hobbies[i].time}`
  );
}
/**
 * John Doe: Sleeping - 4pm
John Doe: Happiness - all-time
 */
// John Doe: Sleeping - 4pm
// John Doe: Happiness - undefined
