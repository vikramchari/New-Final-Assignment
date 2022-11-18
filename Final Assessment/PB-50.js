// The nullish coalescing (??)operator is a logical operator that returns its 
// right-hand side operand when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand.


const baz = 0 ?? 42;
console.log(baz);
// expected output: 0


// The optional chaining (?.) operator accesses an object's 
// property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.


const adventurer = {
    name: 'sanjay',
    cat: {
      name: 'Ramaswamy'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  // expected output: undefined





//   Immutable
// An immutable value is one whose content cannot be changed without creating an entirely new value.

// In JavaScript, primitive values are immutable — once a primitive value is created, it cannot 
// be changed, although the variable that holds it may be reassigned another value. By contrast, objects 
// and arrays are mutable by default — their properties and elements can be changed without reassigning a new value.


const lastName = "Silas";
// …we will get an error when we try to assign it to a new value;

lastName = "Doe"
// TypeError: Assignment to constant variable.