//JavaScript function to get the last element of an array

let last =  function(array, n) {
    if (array == null) 
      return  0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  //Slice method Used to get last element in array
    };
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));