//reduce()- perform logic on all elements of array and result store into new array

let number =[1,2,3,4,5]
let sum=0
number.forEach(function(n){
     sum=sum+n
})
console.log(sum)

//sum of all nummbers in array

let total = number.reduce(function(sum,curr)
{
    return (sum+curr)
},0)

console.log(total)

//max number in array

let maximum=number.reduce(function(max,curr){
    if(curr>max)
    {
        max=curr
    }
    return max

},number[0])

console.log(maximum)

//find total age of all employess

let employee =[
    {name : "John1",age:20,dept:"HR1"},
    {name : "John2",age:30,dept:"HR2"},
    {name : "John3",age:40,dept:"HR3"},
    {name : "John4",age:50,dept:"HR4"},
] 

let totalAge=employee.reduce(function(totalAge,emp){
    return totalAge+emp.age
},0)
console.log(totalAge)