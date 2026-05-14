let str = "hello";
let arrStr=str.split("")

let charCount ={};

for(let ch of arrStr)
{
    if(charCount[ch])
    {
        charCount[ch]=charCount[ch]+1
    }
    else
    {
       charCount[ch]=1
    }
}

console.log(charCount)
