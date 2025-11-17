//Normal function declaration

function add(a,b)
{
    return a+b
}

let sum=add(4,5)
console.log(sum)

function print()
{
    console.log("hello")
}

print()

//Function Expression

let multiply = function(a,b)
{
    return a*b
}

let result = multiply(5,6)
console.log(result)

//Arrow function

let divide=(a,b)=>{return a/b}
result=divide(12,2)
console.log(result)

//Function constructor
const addition=new Function('a','b','return a+b')
result=addition(12,2)
console.log(result)

//Self invoking function

;(function()
{
    console.log("server is running")
})();

//CallBack function - Annonymous function

let numbers = [2,3,4,5]
let squareNums=numbers.map(function(n){
   return n*n
})
console.log(squareNums)

//Recursive function

function fact(n)
{
    if(n===0 || n===1)
    {
        return 1
    }
    else
    {
        return n*fact(n-1)
    }
}

console.log(fact(4))

// Higher Order function

function addi(a,b)
{
    return a+b
}

function multplication(a,b)
{
    return a*b
}

function operate(funcName,a,b)
{
    return funcName(a,b)
}

result = operate(addi,5,3)
console.log(result)

