let str='hello';
let splitStr=str.split("");
let len= splitStr.length;
let reverse="";
for(let i=len-1;i>=0;i--)
{
    reverse=reverse+splitStr[i]
}
console.log(reverse)