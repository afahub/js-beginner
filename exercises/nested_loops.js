const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nestArray = [[], []];

const timetable = [
  ["Maths", 80],
  ["Science", 90],
  ["English", 85],
];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  //   console.log(matrix[i]);
  // matrix[i] is an array
  let innerArray = matrix[i];
  // array index starts from 0
  // len of innerArray = 3,
  //   0, 1, 2, undefined
  // j =1
  // j =2
  // j =3
  for (let j = 1; j <= innerArray.length; j++) {
    // console.log(innerArray[j]);
  }
}

// assignment. 1. Use a recursive function to generate this table.
function tableGenerator() {
  let myTable = [];
  const NUM_COL = 4;
  const NUM_ROWS = 3;
  let count = 0;
  for (count; count < NUM_ROWS; count++) {
    let tempTable = [];
    // modify the temporary table in our inner loop.
    for (let j = 0; j < NUM_COL; j++) {
      tempTable.push(j + 1);
      // array [0]
      // array [1]
      // array [2]
      // array [3]
      // mytable = [[0],[1],[2],[3]]
      // mytable = [ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ] ]
    }
    myTable.push(tempTable);
  }

  return myTable;
}

console.log(tableGenerator());
