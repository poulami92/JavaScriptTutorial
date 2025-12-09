
async function fetchApiData()
{
 try{
const response= await fetch('https://in.bookmyshow.com/explore/home/bengaluru')
if(response.status!==403)
{
    throw new Error('network response was not ok')
}
//console.log(response)
const value = await response.text()
console.log(value)
 }
 catch(error)
 {
    console.log('Error ',error.message)
 }
}

fetchApiData()