//map()- create new array by execution logic on each element

let num =[2,4,5,8]
let newNum=num.map(function(el)
{
    return el*2
})
console.log(newNum)

let fahTemp=[32,68,100]

function toCelcious(temp)
{
    return (temp-32)*5/9
}

let cel=fahTemp.map(toCelcious)
console.log(cel)