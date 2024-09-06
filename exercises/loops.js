let myWork = [];
for (let i = 0; i < 10; i++) {
  const TOTAL_LESSONS = 10;
  const obj = { name: `Lesson ${i + 1}`, status: TOTAL_LESSONS % (i + 1) == 0 };
  myWork.push(obj);
}

console.log(myWork);
