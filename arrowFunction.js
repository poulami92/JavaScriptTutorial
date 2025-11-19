const square = (n)=>{
    return n*n
}

console.log(square(4))

const msg = ()=>
{
    console.log("hello")
}
msg()

//Accessing object fields with arrow expression func

const person = {firstName:"PD",lastName:"Datta"}

const fullName= (p)=>{ 
    console.log(p.firstName+" "+p.lastName)
}
fullName(person)

//pasing default values to function parameter
const greet=(username='guest',age=2)=>`Hello ${username}, you are ${age} years old`
const g1=greet()
console.log(g1)
const g2= greet("PD",30)
console.log(g2)

//Find max no using Math func

const maxVal= (a,b,c)=>
{
    return Math.max(a,b,c)
}

const maxValue = maxVal(10,30,50)
console.log(maxValue)

//rest parameter...variable act as an array variable
const sum = (...numbers)=>{
    return numbers.reduce(function(sum,curr){
        return sum+curr
    },0)
}

const total=sum(1,2,3,4,5)
console.log(total)

const browserInfo = (browser='chrome',...details)=>{
    console.log('Browser:'+browser)
    console.log('other deatils:'+details)
}

browserInfo()
browserInfo('firefox','mozilla','headless')

