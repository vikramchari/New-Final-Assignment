//JavaScript program to check whether the string has '$' symbol in it

let text = "Hello $, welcome to the universe.";
var result = text.includes("$");

try {
    if(result) {
        throw "error" 
    }
}
catch {
    
     alert("string has special character");
}
finally {
    alert('You have just seen string has a special character');
}
