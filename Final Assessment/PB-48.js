//Add, subtract ,calculate average of all elements of an array using reduce() method

const numbers1 = [175, 50, 25];
const sum = (accumulator, number1) => accumulator + number1;

console.log(numbers.reduce(sum)); //250

var numbers = [175, 50, 25];
const subtract = (accumulator, number) =>  accumulator - number;

console.log(numbers.reduce(subtract)); //100


const arr = [175, 50, 25];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average); //83.3333333