//1. simple callback function with function name passing as argument

function greet(name,funcName){
    console.log('Hello '+name)   //sync step
    funcName()
}

//callback function
function welcome()
{
    console.log('Welcome ....')
}

greet('PD',welcome)


/
//2. simple callback function with whole function passing as argument


function greet(name,funcName){
    console.log('Hello '+name)
    funcName(name)   //callback function calling
}

greet('PD',function(name){
    
    console.log('Welcome ....'+name)

})

// 3. callback with async step

function printInfo(name,funcName)
{
   setTimeout(function()
   {
     console.log('User name '+name)
     funcName('Data fetched')
   },5000)

   //funcName('Data fetched')
}

function display(msg)
{
    console.log(msg)
}

printInfo('Alice',display)







