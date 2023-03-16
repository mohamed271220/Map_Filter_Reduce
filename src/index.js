var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const doubledNumbers = numbers.map((x) => {
  return x * 2;
});
console.log(doubledNumbers);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter((num) => {
  return num > 10;
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const reducedNum = numbers.reduce((accumulator, currentNum) => {
  console.log("acc=" + accumulator + " num=" + currentNum);

  return accumulator + currentNum;
});

console.log(reducedNum);

//Find - find the first item that matches from an array.

const findNum = numbers.find((num) => {
  return num > 10;
});
console.log(findNum);

//FindIndex - find the index of the first item that matches.
const findI = numbers.findIndex((num) => {
  return num > 10;
});
console.log(findI);
