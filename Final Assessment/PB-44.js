//create  an Object using Object Literal. 
var person = { 
    firstName: "James", 
    lastName: "Bond", 
    age: 15, 
    getFullName: function () { 
            return this.firstName + ' ' + this.lastName 
    }
}; 

//	Using Object.values() method to get values of property in an Object.
console.log(Object.values(person));

//JavaScript program to get property names and it's values
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
 }
 