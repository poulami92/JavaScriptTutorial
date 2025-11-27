//Convert dublicate values to unique values in array

const array = [1,2,2,4,6,5,5]
const uniqueArray = [...new Set(array)]
console.log(uniqueArray) //[ 1, 2, 4, 6, 5 ]

//Convert int to string

const num =32
const numString = num.toString()
console.log(numString)
console.log(typeof numString) //staring

//Convert flaoting value to int

const float = 3.76
const intNum=parseInt(float)
console.log(intNum)

//Convert string to number

const strNumber ='32'
console.log(Number(strNumber))

//Check if variable is number

const value = 56
if(typeof value ==='number' && !isNaN(value))
{
    console.log('value is number')
}
else
{
    console.log('value is not number')
}

//Swap two variables

let a = 5;
let b = 10;
[a,b]=[b,a];
console.log('a :'+a)
console.log('b :'+b)

//check if object has a property

const person =
{
   name : 'John',
   age : 21
}

if(person.hasOwnProperty('age'))
{
   console.log('person has property')
}
else{
    console.log('person has no property')
}

//Remove falsy values from array
const arrayvalues = [0,1,false,2,'',3,null,undefined,NaN]
const newArrayValue= arrayvalues.filter(Boolean)
console.log(newArrayValue)

//String -->convert upper case,lowercase

const str='Naveen Automation'
const strUpper=str.toUpperCase(str)
const strLower=str.toLowerCase(str)
console.log(strUpper)
console.log(strLower)

//Check if array contains spacific value

const lang =['java','python','ruby','js']
const flag = lang.includes('ruby')
console.log(flag)

//Check if array is empty or not

const emptyArry=[]
let len = emptyArry.length
if(len ===0)
{
    console.log('empty')
}

//Generate random number
const min = 10
const max = 20
const ran = Math.floor(Math.random()*(max-min+1))+min
console.log(ran)

//Join array elements in string using separator

const words =['Hello','Naveen']
const sent = words.join(' ')
console.log(sent)

//Accessing object property

const user =
{
    name : 'Tom',
    age : 30,
    dob : '01-02-1992'
}

console.log(user.name)

//Clone array-object

const marks=[10,20,30]
const dub =[...marks]   //spread operator
console.log(dub)

const dubUser={...user}
console.log(dubUser)

//Convert object keys to array

const employees =
{
    name : 'Tom',
    age : 30,
    dob : '01-02-1992'
}

const keysArray=Object.keys(employees)
console.log(keysArray)


//Convert object values to array

const valuesArray=Object.values(employees)
console.log(valuesArray)

//Convert object key -values to array
const keyValuesArray=Object.entries(employees)
console.log(keyValuesArray)

//Fetch current date and time

const currDate = new Date()
console.log(currDate.toLocaleString())

//If variable is defined or not

let i 
console.log(typeof i)

//Reduce an array length

const testArray=[0,1,2,3,5.7]
testArray.length=2
console.log(testArray)

//Fetch last item in array

const testArr=[0,1,2,3,5,7]
console.log(testArr[testArr.length-1])







