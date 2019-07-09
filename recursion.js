function fact(n,k)
{
 if(n==1)
    { return 1;}
    else{
        for(var i=k;i<2;i++)
        {
            console.log("Before",n,i)
            n*fact(n-1,k+1)
            console.log("Last",n,i)
        }
}
}
console.log(fact(5,0))
