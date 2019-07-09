var h="2c, 2d, 2c, 4h, 5d"
h=h.replace(/ /g,"").split(',')
var hand1=[]
for(i=0;i<h.length;i++)
{   var k={}`   `
    k['val']=h[i][0]
    k['img']=h[i][1]
    hand1.push(k)
}
console.log(hand1)


[ { val: '2', count: 0 },
  { val: '3', count: 0 },
  { val: '4', count: 0 },
  { val: '5', count: 0 },
  { val: '6', count: 0 },
  { val: '7', count: 0 },
  { val: '8', count: 0 },
  { val: '9', count: 0 },
  { val: '10', count: 1 },
  { val: 'J', count: 1 },
  { val: 'Q', count: 1 },
  { val: 'K', count: 1 },
  { val: 'A', count: 1 } ].reduce((prev,curr,index,array) => {
	let a = array.filter(ele => ele.count == curr.count).reverse().shift()
	if(prev.find(ele => ele.count == curr.count)){
	return prev
	}
	prev.push(a)
	return prev
},[])


//let FirstplayerRank = card(hand1)
//let SecondplayerRank = card(hand2)

//console.log(SecondplayerRank)
/*
if(FirstplayerRank[0]>SecondplayerRank[0])
{
    console.log("FirstPlayer : Winner")
    console.log("Status : ",FirstplayerRank[1])
    console.log("SecondPlayer : Runner")
    console.log("Status : ",SecondplayerRank[1])

}
else{
    console.log("SecondPlayer : Winner")
    console.log("Status : ",SecondplayerRank[1])
    console.log("FirstPlayer : Runner")
    console.log("Status : ",FirstplayerRank[1])
}
*/
/*
function getIndexFull(arr){  //last index
    var index=arr.reduce((ac,ev,ei,arr)=>{
         if(ac[0]<ev.count){
             ac[0]=ev.count;
             ac[1]=ei
         }
         return ac
     },[0,0])
     return index[1]
}
var ans= arr.reduce((ac,ev,ei,arr)=>{
            if(1==ev.count && ac<=5){ac++}
            else if(ac!=5){ac=0}
            //console.log(ac,ei)
            return ac
        },0)
        if(ans==5){return true}
        else{return false}

*/

   /* function getIndex(arr){
        let b = arr.sort((a,b) => b.count- a.count).filter((ele,index,array) => ele.count==array[0].count).shift()
        console.log(b.val)
        console.log("arr",arr)
        console.log(arr.findIndex(ele=>ele.val==b.val))

    }*/

   /* function getIndex(arr,n){
        let b = arr.filter(ele => ele.count == n).reverse().shift()
        return arr.findIndex(ele => ele.val == b.val)
    }
*/