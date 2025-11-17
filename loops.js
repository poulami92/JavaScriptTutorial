// for loop

for (let i=1;i<=10;i++)
{
    console.log(i)
}

//for ...of loop

let array = [1,2,3,4,5]
for(let i of array)
{
    console.log(i)
}

for (let i=0;i<array.length;i++)
{
    console.log(array[i])
}

//while loop

let p =1
while(p<=10)
{
    console.log(p)
    p=p+1
}

//Do while loop

let m =1
do
{
    console.log(m)
    m++
}
while(m<=10)

for (let i =1;i<=100;i++)
{
    console.log(i)
    if (i%5===0)
    {
        console.log("hello "+i)
        break
    }
}

const browser =["Edge","Chrome","Safari"]
for(let e of browser) //here e is each element of array
{
    console.log(e)
    if(e==="Chrome")
    {
        console.log("chrome lauched")
        break
    }
}

//loop user object

const user = {
    name:"John",
    age:30,
    city:"Kolkata"
}

//loop through each property of user object
for(const key in user)
{
    console.log(key+":"+user[key])
}

const brows =["Edge","Chrome","Safari"]
for(let e in brows) //e is the index of aaray here
{
    console.log(e+":"+brows[e])
}


