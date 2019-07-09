var arr=['2+3i','4+5i','2-1i']
var ans=[]
var k=[]
for(var i=0;i<=arr.length-1;i++)
{
  var v=[]
  if(arr[i].lastIndexOf('+')!=-1)
  {
    var f=arr[i].slice(0,arr[i].lastIndexOf('+'))
    var s=arr[i].slice(arr[i].lastIndexOf('+'),arr[i].length-1)
    v.push(parseInt(f))
    v.push(parseInt(s))
    k.push(v)
    
  }
  else if(arr[i].lastIndexOf('-')!=-1)
  {
    var f=arr[i].slice(0,arr[i].lastIndexOf('-'))
    var s=arr[i].slice(arr[i].lastIndexOf('-'),arr[i].length-1)
    v.push(parseInt(f))
    v.push(parseInt(s))
    k.push(v)
  }
    
}
function mult(a,b)
{

    var sub=[]
    var rel=a[0]*b[0]+(a[1]*b[1])*(-1)
    var img=a[0]*b[1]+a[1]*b[0]
    sub.push(rel,img)
    return sub
}
var res=k.reduce(function(ac,ev,ei,arr){
    //console.log(ei)
    var res;
    //console.log(arr[ei],arr[ei+1])
    if(ei==0)
    {   
        ac.push(arr[ei][0],arr[ei][1])
    }
    else{
        ac[0]=ac[0]+arr[ei][0]
        ac[1]=ac[1]+arr[ei][1]
    }
    return ac
},[])

var ans=[]
if(res[1]>0)
{
  ans.push(res[0],"+",res[1]+'i')
}
else{
    ans.push(res[0],res[1]+'i')
}
console.log(ans.join('').toString())