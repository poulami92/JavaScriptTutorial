
function getEvenNumber(value,delay)
{
   return new Promise(function(resolve,reject){
     setTimeout(() => {
        if(value%2===0)
            resolve(value)
        else
            reject(new Error('value is not even number'))
     }, delay);

   })
}

getEvenNumber(4,1000).then((result)=>{
    console.log('step 1: even number',result)
    return getEvenNumber(7,1000)
}).then(function(result){
    console.log('step 2: even number',result)
}).catch((error)=>{
    console.log('promise chain error',error.message)
})