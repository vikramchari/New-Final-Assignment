//JavaScript program which accept a string as input and swap the case of each character. 

var swapEachCase = function(stringletters){
    var newLetters = "";
    for(var i = 0; i<stringletters.length; i++){
        if(stringletters[i] === stringletters[i].toLowerCase()){
            newLetters += stringletters[i].toUpperCase();
        }else {
            newLetters += stringletters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}

var text = 'So, today we have REALLY good day';

var swappedText = swapEachCase(text); // "sO, TODAY WE HAVE really GOOD DAY"