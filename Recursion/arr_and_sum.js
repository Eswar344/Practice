var n=1589,sum=0
function Total(n,sum){
    if(n%10==0){return sum}
    else{
        var k=n%10;
        var sum=sum+k
        var n=Math.floor(n/10)
        return Total(n,sum)
    }
}
console.log("Total ",Total(n,sum))
