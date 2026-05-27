const str = "automation"
let count=0

for(let ch of str)
{
    if('aeiou'.includes(ch))
    {
      count=count+1
    }
}

console.log(count)
