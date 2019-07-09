var digits = [["zero", "one", "two", "three",  "four", "five", "six", "seven", "eight", "nine"],
["ten", "eleven", "twelve",  "thirteen", "fourteen", "fifteen",  "sixteen", "seventeen", "eighteen", "nineteen"],
["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty",  "ninety"],
["hundred", "thousand","lakh","crore"]];

var num="234"
let num_arr=Array.from(num).reverse()

function double_digits_powers(ev,ei,digits,preword,words,arr){
    if(ev<2)
    {   words=digits[1][Number(arr[ei-1])]+" "+preword
    }
    else{ words=digits[2][Number(ev)]+" "+words
    }
    return words
}

var words=""
var preword=""
num_arr.forEach((ev,ei,arr)=>{
    if(arr.length==1 && Number(arr[ei])==0){
        words=digits[ei][0]
    }
    else if(ei==0 && ev!=0){   
        words=digits[ei][Number(ev)]
    }
    if(ei==1 && ev!=0){ 
        words=double_digits_powers(ev,ei,digits,preword,words,arr)
    }
    if(ei==2 && ev!=0){
        words=digits[0][Number(ev)]+" "+digits[ei+1][0]+" "+words
    }
    if(ei==3 && ev!=0){
        preword=digits[ei][1]+" "+words
        words=digits[0][Number(ev)]+" "+preword
    }
    if(ei==4 && ev!=0){
       words=double_digits_powers(ev,ei,digits,preword,words,arr)
    }
    if(ei==5 && ev!=0){
        preword=digits[3][2]+" "+words
        words=digits[0][Number(ev)]+" "+preword
    }
    if(ei==6 && ev!=0){
        words=double_digits_powers(ev,ei,digits,preword,words,arr)
    }
    if(ei==7 && ev!=0){
        preword=digits[3][3]+" "+words
        words=digits[0][Number(ev)]+" "+preword
    }
    if(ei==8 && ev!=0){
        words=double_digits_powers(ev,ei,digits,preword,words,arr)
    }
})
console.log(words)