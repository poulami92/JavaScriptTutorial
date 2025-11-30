const randomeNumberPromise=new Promise(function(resolve,reject){
    
    setTimeout(() => {
        const random =Math.random()
        if(random>0.5)
        {
            resolve(random)
        }
        else{
            reject(new Error('value is too samall'))
        }

    }, 3000);

})

randomeNumberPromise.then(function(result)
{
    console.log('promise fulfilled with value '+result)
})
.catch(function(error)
{
    console.log('Promise is rejected with error',error)
})

