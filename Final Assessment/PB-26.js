//JavaScript program to sort the items of an array.  

const array=[-3,8,7,6,5,-4,3,2,1];
const array2=[];
let min=array[0];
let pos;
var max=array[0];
for (i=0; i<array.length; i++)
{
        if (max<array[i]) max=array[i];
}

for (var i=0;i<array.length;i++)
{
        for (let j=0;j<array.length;j++)
        {
                if (array[j]!="x")
                {
                        if (min>array[j]) 
                        {
                                min=array[j];
                                pos=j;
                        }
                }
        }
        array2[i]=min;
        array[pos]="x";
        min=max;
}
console.log(array2);