const fs = require('fs') 
  
data=[]
fs.readFile('poker.txt', 'utf-8',(err, data) => { 
    if (err) throw err; 
    let line=data.split('\n')
    var hand1=[]
    var hand2=[]
    for(i=0;i<line.length;i++)
    {
        hand1.push(line[i].slice(0,15))
        hand2.push(line[i].slice(15,line[i].length))
    }
    console.log(hand2)
})
