let numberMoneyFile=require("./Number_money")

var digits = [["zero", "one", "two", "three",  "four", "five", "six", "seven", "eight", "nine"],
["ten", "eleven", "twelve",  "thirteen", "fourteen", "fifteen",  "sixteen", "seventeen", "eighteen", "nineteen"],
["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty",  "ninety"],
["hundred", "thousand","lakh","crore"]];

function double_digits_powers(ev,ei,digits,preword,words,arr){
    if(ev<2)
    {   words=digits[1][Number(arr[ei-1])]+" "+preword
    }
    else{ words=digits[2][Number(ev)]+" "+words
    }
    return words
}

let Sentence=function(num_arr){   
    var words=""
    var preword=""
    let count=0
    num_arr.forEach((ev,ei,arr)=>{
        if(Number(arr[ei])==0){
            count++
        }
        if(arr.length==count){
            words=digits[0][0]
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
    return words
}
var num="9385834.83899"
var x=num.indexOf('.')
if(x!=-1)
{
    var paisa=num.substring(x+1,x+3)
    var num_digit=num.substring(0,x)
    var num_arr=Array.from(num_digit).reverse()
    var paisa_arr=Array.from(paisa).reverse()
}
else{
    var num_arr=Array.from(num).reverse()
    var paisa_arr=Array.from(['0']).reverse()
}

let words_numbers=Sentence(num_arr)
let words_paisa=Sentence(paisa_arr)


let moneyNo=numberMoneyFile(num)
console.log("******* Indian Currency *******")
console.log("NumberFormate : ",moneyNo)
console.log("WordFormate : ",words_numbers,"and",words_paisa,"paisa only")
