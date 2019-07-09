/*
for(var i=1;i<=5;i++)
{
    var s='';
    for(var k=i;k<=5;k++)
    {
        s=s+('  ')
    }
    for(var j=1;j<i+1;j++)
    { 
        s=s+(' *  ');
        
    }
    console.log(s)
    console.log('\n')
}
*/

var arr = [1,4,5,6]; 
function permute(str, l, r) 
{ 
    if (l == r) 
        console.log(str+"\n"); 
    else
    { 
        for (i = l; i <= r; i++) 
        { 
            str = swap(str, l, i); 
            permute(str, l + 1, r); 
            str = swap(str, l, i); 
        } 
    } 
} 







function swap(a, i, j) 
{ 
    temp; 
    charArray = str_split($a); 
    temp = $charArray[$i] ; 
    charArray[$i] = $charArray[$j]; 
    charArray[$j] = $temp; 
    
    return implode($charArray); 
} 
  
// Driver Code 
str = "123"; 
n =str.length 
permute(str, 0, n - 1); 
  

