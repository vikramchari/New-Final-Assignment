//JavaScript program to find the most frequent item of an array.  

var array=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var flag = 1;
var count = 0;
var item;
for (var i=0; i<array.length; i++)
{
        for (var j=i; j<array.length; j++)
        {
                if (array[i] == array[j])
                 m++;
                if (flag<count)
                {
                  flag=count; 
                  item = array[i];
                }
        }
        count=0;
}
console.log(item+" ( " +flag +" times ) ") ;