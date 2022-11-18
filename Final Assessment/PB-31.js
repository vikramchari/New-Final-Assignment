// program to check if an array contains a specified value

const array = [2, 5, 9, 6];

const hasValue = array.indexOf(5) !== -1;

// check the condition
if(hasValue) {
    console.log('TRUE Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}