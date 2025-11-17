//filter()-returns new array by filtering elememnts that satisfies condition

let num = [2,3,4,5,6,8,9]
let newNum=num.filter(function(el)
{
    return (el%2!==0)
})
console.log(newNum)

let employee =[
    {name : "John1",age:20,dept:"HR1"},
    {name : "John2",age:30,dept:"HR2"},
    {name : "John3",age:40,dept:"HR3"},
    {name : "John4",age:50,dept:"HR4"},
]

let newEmp=employee.filter(function(emp){

    return(emp.age>30)

})
console.log(newEmp)