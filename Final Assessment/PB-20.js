let dropdown = document.getElementById('country-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose State/Province';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://restcountries.com/v3.1/all'; // URl to be specified to fetch the data
 
fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    //Fetch country details
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option'); //loop over all Countries data using for
      	  option.text = data[i].name.common;
      	  option.value = data[i].name.common;
      	  dropdown.a
          dd(option);
    	}
       //Fetch Capital details
      for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].capital;
        option.value = data[i].capital;
        dropdown2.add(option);
    }
    //Fetch Currency details
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option'); //loop over all currency data using for
      option.text = data[i].currencies; 
      option.value = data[i].currencies;
      dropdown3.add(option);
  }
     
          
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });




  let dropdown2 = document.getElementById('city-dropdown');
dropdown2.length = 0;

let defaultOption2 = document.createElement('option'); //To display as select drop down
defaultOption2.text = 'Choose city';

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;


let dropdown3 = document.getElementById('currency-dropdown');
dropdown3.length = 0;

let defaultOption3 = document.createElement('option');
defaultOption3.text = 'Choose currency';

dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;