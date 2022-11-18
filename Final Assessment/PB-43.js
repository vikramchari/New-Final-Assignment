// Assume that the marks of her 10 students are available in an array. 
// 2: The marks are out of 25.


var find_more_avg = (arr) =>{
    var sum=0;
    for(var i=0;i<10;i++){
        sum+=arr[i];
    }
    var avg = sum/10;
    var count=0;
    for(var i=0;i<10;i++){     //find_more_than_average(): 
       if(arr[i]>avg){
           count++;
       }
    }
    var percent = (count / 10)*100;
    console.log("more than average"+ percent);
    }
    
    frequencyCalculate = (arr)=>{
        var k;
        var count=0;
        var newarr=[26];
        for(var i=0;i<26;i++){
            for(var j=0;j<26;j++){    //generate_frequency(): 
                if(arr[j]==i){
                    count++;
                }
            }
            newarr[i] = count;
            count=0;
            console.log(newarr[i]);
        }
    }
    
    find_more_avg([12,18,25,24,2,5,18,20,20,21]);
    frequencyCalculate([12,18,25,24,2,5,18,20,20,21]);
    