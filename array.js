//push()-add element to end of array and returns new length of array

let fruits =['apple','bannana','orange']
fruits.push('mango','cherry')
console.log(fruits)

//pop()-remove elememnt from end of array and return removed element

let rem=fruits.pop()
console.log(fruits)
console.log(rem)

//shift()-remove element from start of array and return removed element

let firstRem=fruits.shift('apple')
console.log(fruits)
console.log(firstRem)

//unshift()-add elements to start of array and return new array length
fruits.unshift('mango','cherry')
console.log(fruits)

//splice()-add/remove elements form specific index and return deleted elements

let colors = ['red','green','blue']
let delCol=colors.splice(1,1,'pink','orange')
console.log(colors)
console.log(delCol)

//slice()-extract portion of array and return new array

let numbers =[1,4,5,3,5,8]
let newArr=numbers.slice(1,4)
console.log(newArr)

//indexOf()-return index of first occurance of element
let index= colors.indexOf('pink')
console.log(index)
index=colors.indexOf('purple')
console.log(index)
colors.push('pink')
console.log(colors)
index=colors.indexOf('pink',colors.indexOf('pink')+1)
console.log(index)

//concat()-merge two or more arrays and return new array
let fr=['apple','grape']
let num =[1,2,3]
let concatArry=fr.concat(num)
console.log(concatArry)

//includes()- returns trues if array contains specified element

let test=['admin','user','guest']
let flag=test.includes('superuser')
console.log(flag)
flag=test.includes('user')
console.log(flag)

//forEach()- execude logic for each array element

test.forEach(function(el,index,test)
{
    console.log(index+":"+el)
})

//every()-returns true if all elements in array passed condition,else false

let ages =[20,30,40,50]
let f =ages.every(function(el)
{
   return el>10
})
console.log(f)

//some()-returns true if alleast one element in array passed condition,else false

let scores =[20,30,40,50]
let s =scores.some(function(el)
{
   return el>40
})
console.log(s)

//find()-returns first elemmet in array satisfies condition,else undefined

let fs=scores.find(function(sc){

    return (sc>20)
})
console.log(fs)

//reverse()-reverse the order of the array 
let letters = ['a','b','c']
letters.reverse()
console.log(letters)

//sort()-sort array

console.log(fruits)
fruits.sort()
console.log(fruits)
