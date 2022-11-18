//Function for testing rest operater

function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
  }
  
  console.log(
    myBio('Oluwatobi', 'Sofela', 'CodeSweetly', 'Web Developer', 'Male')
  );

  //output will be ["CodeSweetly", "Web Developer", "Male"]
  

  // Function for testing spread operater
function myBio(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  
  // Use spread to expand an array’s items into individual arguments:
  myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);
  
  // The output will be: “Oluwatobi Sofela runs CodeSweetly”



  //Array descructuring 


var arr = ["Hello", "World"]  
  
// destructuring assignment  
var [first, second] = arr;  
  
console.log(first); // Hello  
console.log(second); // World 