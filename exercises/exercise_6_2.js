// create an array of descriptive words

const words = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "orange",
  "brown",
  "black",
  "white",
];

function promptName() {
  const name = prompt("Enter a name");
  // Math.random(). 1<value>=0
  const randomValue = Math.floor(Math.random() * words.length);

  const randomWord = words[randomValue];

  alert(
    `Your name is ${name}, and the word associated with it is ${randomWord}`
  );
}

promptName();
