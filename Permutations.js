var arr = [1,2,3,4];
var lt=(arr.length)-1
permutation(arr,0,lt)

function swap(ar,l,r)
{
    var temp;
    temp=arr[l]
    arr[l]=arr[r]
    arr[r]=temp;
    return arr
}
function permutation(arr,l,r)
{
    if(l== r)
    {
        console.log(arr.join(""))
        // return arr
    }
    else
    {
        for(var i=l;i<=r;i++)
        {
            console.log("Before :",l,i)
            swap(arr,l,i)
            permutation(arr,l+1,r)
            console.log("After",l,i)
            swap(arr,l,i) 
            
        }
    }
}