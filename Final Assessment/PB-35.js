//Simulating a periodic stock price change and displaying on the console

var setinterval;  
var count=0;
setinterval = setInterval(value = ()=>{
         count += 1;
    if(count === 5){
        clearInterval(setinterval);
    }
var rand = Math.floor((Math.random() * 255) + 1);
    console.log("Current Stock Price is : "+rand);
}, 2000);
