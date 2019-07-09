let arr=[2,3,-4,-6]
function pow(a,b)
{
    if(b<0)
    {b=b*(-1)}
    else if(a==0)
        return 0
    else if(b==0)
        return 1
    else if(b==1)
    {   return a}

    return a*pow(a,b-1)
}
function Power(arr)
{
    if(arr.filter((el)=>{return el>=10}).length>=1)
    {  return "Error : Please Enter below 10"}
    else{
       return arr.map((val,ind,arr)=>{
            if(ind==0)
             {  
                 var ans=pow(val,arr[arr.length-1]) 
                 //console.log("1",ans)
                 if(arr[arr.length-1]<0)
                 {
                     return 1/ans
                 }
                 else
                 {
                     return ans
                 }
                
            }
            else{
                var ans=pow(val,arr[ind-1]) 
               // console.log("2",ans)
                if(arr[ind-1]<0)
                {
                    //console.log('neg',arr[ind-1],ans)
                 return 1/ans
                }
                else{
                return ans
                }
            }

                
        })
    }
}
let ans  = Power(arr)
console.log(ans)