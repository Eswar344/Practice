let array= ['Sai','Anil','Ravi']

ans=array.reduce((pre,cv,ci,arr)=>{
    let sum=0
    arr=Array.from(cv)
    arr.forEach((el,ei,arrr)=>{
        sum=sum+el.charCodeAt(0)
        console.log(sum,el)
    })
    return pre+sum
},0)
console.log(ans)
