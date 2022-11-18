let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },

  ]

//Add a new object at the start - Array.unshift

let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
  }
  cars.unshift(car);

  console.log(cars);


//   Add a new object at the end - Array.push

let car1 = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
   }
   cars.push(car1);
   console.log(cars);

//    Add a new object in the middle - Array.splice

let car2 = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
  }
  cars.splice(4, 0, car2);

  console.log(cars);


//   Find an object in an array by its values - Array.find

let car3 = cars.find(car3 => car3.color === "red");

console.log(car3)


// Get multiple items from an array that match a condition - Array.filter

let redCars = cars.filter(car => car.color === "red");
console.log(redCars);


// Transform objects of an array - Array.map


let sizes = cars.map(car => {
    if (car.capacity <= 3){
      return "small";
    }
    if (car.capacity <= 5){
      return "medium";
    }
    return "large";
  });
  console.log(sizes);
  

//   Array.forEach

cars.forEach(car => {
    car['size'] = "large";
    if (car.capacity <= 5){
      car['size'] = "medium";
    }
    if (car.capacity <= 3){
      car['size'] = "small";
    }
   });



//    Sort an array by a property - Array.sort
   let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
   console.log(sortedCars);


//    Checking if objects in array fulfill a condition - Array.every

cars.every(car => car.capacity >= 4);

// JavaScript Array concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);


// JavaScript Array indexOf()

// Find the first index of "Apple":

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log(index)


// The join() Method
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits1.join(); //join() returns an array as a string


// JavaScript Array lastIndexOf()
const fruits2 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
let index2 = fruits2.lastIndexOf("Apple");
console.log(index2);


// JavaScript Array reverse()

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.reverse();  //The reverse() method reverses the order of the elements in an array

// Shift  the first element of the array:
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.shift();


//JavaScript Array some()
const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}