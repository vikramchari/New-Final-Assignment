
// Subtract the element of an array using both reduce() and reduceRight() and see the difference.
var numbers = [175, 50, 25];
const subtract = (accumulator, number) =>  accumulator - number;

console.log(numbers.reduce(subtract)); //100



var arr = [175, 50, 25];
  
        function subofArray(total, num) {
            return total - num;
}
console.log(arr.reduceRight(subofArray)); //200