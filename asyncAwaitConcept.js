// async function without await -> resolved promise

async function f1()
{
    console.log('this is async func without await')
    return 42
}

// f1().then(function(result){
//     console.log(result)
// })

// async function without await -> rejected promise

async function f2()
{
    throw new Error('this is async func without await throwing error')
}

// f2().catch(function(error){
//     console.log('the error msg '+error.message)
// })

// async function call with await and promise handling

function getInfoData()
{
    return new Promise(function(resolve,reject){
        const ranNumber = Math.random()
        setTimeout(() => {
            if(ranNumber>0.5)
            resolve(ranNumber)
        else
            reject(new Error(ranNumber+' is less than 0.5'))
        }, 2000);        
    })

}

async function getNumberInfo()
{
  try{
       const value=await getInfoData()
       console.log('the resulted value ',value)
  }
  catch(error)
  {
     console.log('the error msg ',error.message)
  }
}

getNumberInfo()


