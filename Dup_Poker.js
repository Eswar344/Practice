function card(hand)
{
    let t_symb = [{ sym:"H",count: 0},{ sym:"C",count: 0},{ sym:"S",count: 0},{ sym:"D",count: 0}];
    let t_num=[{ val:"2",count: 0},{ val:"3",count: 0},{ val:"4",count: 0},{ val:"5",count: 0},{ val:"6",count: 0},{ val:"7",count: 0},{ val:"8",count: 0},{ val:"9",count: 0},{ val:"T",count: 0},{ val:"J",count: 0},{ val:"Q",count: 0},{ val:"K",count: 0},{ val:"A",count: 0}]
    let rank = 0,title="",high=0, nexthigh=0

    for(var i=0;i<hand.length;i++)
    {
        t_symb[hand[i].sym]++;
        t_num[hand[i].val]++
    }
    console.log(t_symb)
    console.log(t_num)
    
    function getIndexFull(arr){  //last index
        var index=arr.reduce((ac,ev,ei,arr)=>{
            if(ac[0]<=ev.count){
                ac[0]=ev.count; 
                ac[1]=ei   
            } return ac  
        },[0,0])
        return index[1]
    }
    function getIndexOther(arr,n){
        let b = arr.filter(ele => ele.count!=n && ele.count!=0).reverse().shift()
        return arr.findIndex(ele => ele.val == b.val)
    }
    function getIndexNum(arr,n){
        let b = arr.filter(ele => ele.count == n).reverse().shift()
        return arr.findIndex(ele => ele.val == b.val)
    }
    function checkSequence(arr){
        var ans= arr.reduce((ac,ev,ei,arr)=>{
            if(1==ev.count && ac<=5){ac++}
            else if(ac!=5){ac=0}
            return ac
        },0)
        if(ans==5){return true}
        else{return false}
    }
    if((t_num['A']==1) && t_num['K']==1 && t_num['Q']==1 && t_num['T']==1 && t_num['J']==1 && (Object.values(t_symb).indexOf(5)))
    {   rank = 10
        title="Royal Flush"
        high=0
    }
    else if(t_symb.find(ele=>ele.count==5)&& checkSequence(t_num))  
    {   rank=9
        title="Straight Flush"
        high=getIndexFull(t_num)          
    }
    else if(t_num.find(ele=>ele.count==4))
    {   rank = 8
        title="Four Of A Kind"
        high=getIndexNum(t_num,4)
        nexthigh=getIndexNum(t_num,1)
    }
    else if(t_num.find(ele => ele.count == 3) && t_num.find(ele => ele.count == 2))
    {   rank=7 
        title="Full House"
        high=getIndexNum(t_num,3)
        nexthigh=getIndexNum(t_num,2)
    }
    else if(t_symb.find(ele=>ele.count==5))
    {   rank=6
        title="Flush"
        high=getIndexFull(t_num)
    }
    else if(checkSequence(t_num))
    {   rank = 5
        title="Straight"
        high=getIndexFull(t_num)
    }
    else if(t_num.find(ele => ele.count ==3 ))
    {   rank=4
        title="Three Of A Kind";
        high=getIndexNum(t_num,3)
        nexthigh=getIndexOther(t_num,3)
    }
    else if(t_num.filter(elem => elem.count === 2).length==2)
    {   rank=3
        title="Two Pair" 
        high=getIndexNum(t_num,2)
        nexthigh=getIndexNum(t_num,1)
    }
    else if(t_num.filter(elem => elem.count === 2).length==1)
    {   rank=2
        title="One Pair"
        high=getIndexNum(t_num,2)
        nexthigh=getIndexOther(t_num,2)
    }
    else
    {   rank=1
        high=getIndexFull(t_num)
        title="High Card"
    }
    
    var Player_status=[]
    Player_status.push(rank,title,high,nexthigh)
    return Player_status
    
}
/**
 * 
 * @returns {number} result
 * @param {string} pokerHand1 
 * @param {string} pokerHand2 
 */
function ToObj(h)
{
    h=h.split(' ')
    var hand=[]
    for(i=0;i<h.length;i++)
    {   
        var k={};
        k['sym']=h[i].slice(h[i].length-1,h[i].length)
        k['val']=h[i].slice(0,h[i].length-1)
        hand.push(k)
    }
    return hand
}
function compareHands(pokerHand1, pokerHand2) 
{    
    let hand1=ToObj(pokerHand1)
    //let hand2=ToObj(pokerHand2)
    
    let FirstplayerRank = card(hand1)
    //let SecondplayerRank = card(hand2)
    
    //console.log(FirstplayerRank)
   // console.log(SecondplayerRank)

    if(FirstplayerRank[0]>SecondplayerRank[0])
    {  return 1 }
    else if(FirstplayerRank[0]<SecondplayerRank[0])
    {   return -1 }
    else
    {  if(FirstplayerRank[2]>SecondplayerRank[2])
        { return 1 }
        else if(FirstplayerRank[2]<SecondplayerRank[2])
        { return -1 }
        else
        {   if(FirstplayerRank[3]> SecondplayerRank[3]){
                return 1
            }else if(FirstplayerRank[3] < SecondplayerRank[3]){
                return -1
            }else{
                return 0
            } 
        }    
    }
    
}

const result = compareHands("TC JS QH KS AC","5C JC 2H 5S 3D");
console.log(result);//-1

const fs = require('fs') 
  
fs.readFile('poker.txt', 'utf-8',(err, data) => { 
    if (err) throw err;
    let line=data.split('\n')
    let len= Math.round(line[0].length/2)
    let  hand1_count=0,hand2_count=0,draw=0;
     line.forEach(el => {
        let result=compareHands(el.slice(0,len-1),el.slice(len,el.length))
        if(result==1){
            hand1_count++
        }
        else if(result==-1){
            hand2_count++
        }
        else if(result==0){   
            draw++
        }
    });
    console.log("Hand1 count : ",hand1_count)
    console.log("Hand2 count : ",hand2_count)
    console.log("Draw : ",draw)
    console.log("overall :",hand1_count+hand2_count+draw)
})