
/*function star()
{
     for(var m=1;m<i+1;m++)
    {
        s=s+'* '
    }
}

var n=5
for(var i=1;i<=n;i++)
{
    var s='';
    star()
    for(var k=1;k<=(n*2)-2*i;k++)
        {
            s=s+('  ')
        }
    star()
    console.log(s)
    console.log('\n')
}*/

var n=5
for(var i=1;i<=n;i++)
{
    //star()
    let s=""
    for(var j=1;j<=2*n;j++)
    {
        if(j>i && j<=2*n-i)
        {
            s=s+('  ') 
        }
        else{ 
            s=s+'* ' 
        }
    }
    console.log(s)
    console.log('\n')
}

