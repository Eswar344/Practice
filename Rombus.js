n=7
for(var i=1;i<=n;i++)
{
    var s='';
    m=Math.floor(n/2)+1;
    for(j=1;j<n;j++)
    {
        if((i==1 || i==n ))
        {   
            if(j<Math.floor(n/2)+1)
            {     
                s+='  '
            }
            else if(j==Math.floor(n/2)+1)
            {
                s+='* '
            }
        }
        else{
           if(j==m-(i) || j== m+(i))
           {
               s+="* "
           }
           else{
               s+='  '
           }        

        }
        
    }
    console.log(s)
    console.log('\n')
}


