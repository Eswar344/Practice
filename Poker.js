function card(hand)
{
    let t_symb = { "H": 0, "S": 0, "C": 0, "D": 0 };
    let rank = 0,title="",high=0, nexthigh=0
    let t_num = {}
    for(var i=0;i<hand.length;i++)
    {
        t_symb[hand[i].sym]++;
    }
    for(var i=0;i<hand.length;i++)
    {
        if(hand[i].val in t_num||hand[i].val=="T"&&t_num[10]>=1||hand[i].val=="J"&&t_num[11]>=1||hand[i].val=="Q"&&t_num[12]>=1||hand[i].val=="K"&&t_num[13]>=1||hand[i].val=="A"&&t_num[14]>=1)
        {   
            if("T"==hand[i].val){t_num['10']++}
            else if("J"==hand[i].val){ t_num['11']++}
            else if("Q"==hand[i].val){t_num[12]++}
            else if("K"==hand[i].val){t_num[13]++}
            else if("A"==hand[i].val){t_num[14]++}
            else{t_num[hand[i].val]++ }
        }
        else{

            if("T"==hand[i].val){t_num[10]=1}
            else if("J"==hand[i].val){t_num[11]=1}
            else if("Q"==hand[i].val){t_num[12]=1}
            else if("K"==hand[i].val){t_num[13]=1}
            else if("A"==hand[i].val){t_num[14]=1}
            else{ t_num[hand[i].val]=1}
        }
    }
    function getIndexFull(arr){  //last index
        for (var key in arr) {
            var big=arr[key]
            var index=key
            break; }
        for(var key in arr)
        {   if(arr[key]>=big)
            {
                big=arr[key]
                index=key;
            } 
        }
        return index
    }
    function getIndexNum(arr,n){
        for (var key in arr) {
           if(arr[key]==n)
           {
              var index=key;
           } 
        }
        return index
    }
   function getIndexOther(arr,n){
    for (var key in arr) {
        if(arr[key]!=n)
        {
            var index=key;
        } 
     }
     return index
    }
    function checkSequence(arr){
        let ans= Object.keys(arr).reduce((ac,ev,ei,arr)=>{
            if(ei==0){ac[0]=eval(arr[ei])}
            else{
                if(ac[0]==eval(arr[ei])-1)
                {
                    ac[0]=eval(arr[ei])
                    ac[1]++
                }
                else{ac[1]=0}
            }
            return ac
        },[0,1])
       return ans[1]==5
    }
    //console.log(t_num)
    if((t_num[10]==1) && t_num[11]==1 && t_num[12]==1 && t_num[13]==1 && t_num[14]==1 && (Object.values(t_symb).indexOf(5)!=-1))
    {   rank = 10
        title="Royal Flush"
        high=0
    }
   
    else if((Object.values(t_symb).indexOf(5)!=-1)&& checkSequence(t_num))  
    {   rank=9
        title="Straight Flush"
        high=getIndexFull(t_num)
    }
    else if(Object.values(t_num).indexOf(4)!=-1)
    {   rank = 8
        title="Four Of A Kind"
        high=getIndexNum(t_num,4)
        nexthigh=getIndexNum(t_num,1)
    }
    else if((Object.values(t_num).indexOf(3)!=-1) && (Object.values(t_num).indexOf(2)!=-1))
    {   rank=7 
        title="Full House"
        high=getIndexNum(t_num,3)
        nexthigh=getIndexNum(t_num,2)
    }
    else if((Object.values(t_symb).indexOf(5)!=-1))
    {   rank=6
        title="Flush"
        high=getIndexFull(t_num)
    }
    else if(checkSequence(t_num))
    {   rank = 5
        title="Straight"
        high=getIndexFull(t_num)
    }
    else if((Object.values(t_num).indexOf(3)!=-1))
    {   rank=4
        title="Three Of A Kind";
        high=getIndexNum(t_num,3)
        nexthigh=getIndexOther(t_num,3)
    }
    else if((Object.values(t_num).filter(elem => elem === 2).length==2))
    {   rank=3
        title="Two Pair" 
        high=getIndexNum(t_num,2)
        nexthigh=getIndexNum(t_num,1)
    }
    else if(Object.values(t_num).filter(elem => elem === 2).length==1)
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
    let hand2=ToObj(pokerHand2)
    
    let FirstplayerRank = card(hand1)
    let SecondplayerRank = card(hand2)
    
    console.log(FirstplayerRank)
    console.log(SecondplayerRank)

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
        {   
            if(FirstplayerRank[3]> SecondplayerRank[3]){
                return 1
            }else if(FirstplayerRank[3] < SecondplayerRank[3]){
                return -1
            }else{
                return 0
            } 
        }    
    }
}
const result = compareHands("3C 3H 3S 3D TH","2S 2C 2D 2H 5S");
console.log(result);//-1

/*
const fs = require('fs') 
  
fs.readFile('poker.txt', 'utf-8',(err, data) => { 
    if (err) throw err;
    let line=data.split('\n')
    let len= Math.round(line[0].length/2)
    let  hand1_count=0,hand2_count=0,draw=0;
     line.forEach(el => {
        let result=compareHands(el.slice(0,len-1),el.slice(len,el.length))
        if(result==1){
            console.log("------player1")
            hand1_count++
        }
        else if(result==-1){
            console.log("------player2")
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
})*/