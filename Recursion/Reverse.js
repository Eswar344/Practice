var s="Eswara Prasad"
var e=""
var l=s.length-1
function Reverse(s,l,e){
    if(l==-1){return e}
    else{
        e+=s[l]
        l-=1
        return Reverse(s,l,e)
    }
}
console.log("Total ",Reverse(s,l,e))