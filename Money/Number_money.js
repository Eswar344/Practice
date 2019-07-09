function numberToMoney(n){
    //var n="-0001234738.567895693"
    var n=Number(n)
    var str=n.toString()
    var x=str.indexOf('.')
    if(x!=-1)
    {
        let arr=str.split("",x)
        let first=Num_simply(arr)
        let ans=first+(str.slice(x,str.length))
        return ans
    }
    else{
        let arr=str.split('')
        let ans=Num_simply(arr)
        return ans
    }
    function Num_simply(arr){
        var ans=arr.reduceRight((ac,ev,ei,arr)=>{
            if(arr[ei]=='-'){}
            else if(ei==arr.length-4)
            { ac=ac+"," }
            else if(ei<arr.length-4 && arr.length%2!=0 &&ei%2!=0)
            { ac=ac+","}
            else if(ei<arr.length-4 && arr.length%2==0 &&ei%2==0)
            { ac=ac+","}
            ac=ac+ev
            return ac
        },"")
        return ans.split("").reverse().join('')
    }
}

module.exports=numberToMoney