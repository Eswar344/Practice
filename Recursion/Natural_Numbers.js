var n=50
var arr=[]
function Natural(n,arr){
    if(n==0){return arr}
    else{
        arr.push(n)
        return Natural(n-1,arr)
    }
}
console.log(Natural(n,arr))

/*
var n=10
function Total(n){
    if(n==0){return 0}
    else{
        return n+Total(n-1)
    }
}
console.log("Total ",Total(n))
*/