var arr=['2+3i','4+5i']
var ans=[]
var k=[]
var img=0,real=0,nimg=0,nreal=0;
for(var i=0;i<=arr.length-1;i++)
{
   v=[]
  if(arr[i].lastIndexOf('+')!=-1)
  {
    var f=arr[i].slice(0,arr[i].lastIndexOf('+'))
    var s=arr[i].slice(arr[i].lastIndexOf('+'),arr[i].length-1)
    v.push(parseInt(f))
    v.push(parseInt(s))
    k.push(v)
    //console.log(k)
    real+=k[i][0]
    img+=k[i][1]
    //console.log("r",img)
  }
  else if(arr[i].lastIndexOf('-')!=-1)
  {
    var f=arr[i].slice(0,arr[i].lastIndexOf('-'))
    var s=arr[i].slice(arr[i].lastIndexOf('-'),arr[i].length-1)
    v.push(parseInt(f))
    v.push(parseInt(s))
    k.push(v)
    nreal+=k[i][0]
    nimg+=k[i][1]
   // console.log(real)
  }
    
}
if(img+nimg>0)
{
  ans.push(real+nreal,"+",img+nimg+'i')
}
else{
    ans.push(real+nreal,img+nimg+'i')
}

//console.log(ans.join('').toString())
//console.log(k)


function mult(a,b)
{

    var sub=[]
    var rel=a[0]*b[0]+(a[1]*b[1])*(-1)
    var img=a[0]*b[1]+a[1]*b[0]
    sub.push(rel,img)
    return sub
}

for(i=0;i<k.length;i++)
{
    if(i==0)
    {
       var res= mult(k[i],k[i+1])
       //console.log(res)
        i=1
    }
    else{
    //console.log("i ",i)
       var res=mult(res,k[i])
    }
}
//console.log(res)
var ans=[]
if(res[1]>0)
{
  ans.push(res[0],"+",res[1]+'i')
}
else{
    ans.push(res[0],res[1]+'i')
}
console.log(ans.join('').toString())