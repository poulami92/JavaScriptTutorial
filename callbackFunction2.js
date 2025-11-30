//callback with async step

function fetchUserData(userId,funcName)
{
  const users ={
    1:{name:'John',age:30},
    2:{name:'Alice',age:40},
  }

  setTimeout(function(){

    const user = users[userId]
    if(user)
    {
      funcName(null,user)        //no error,pass user data
    }
    else
    {
        funcName('user not found')  //pass error msg
    }

  },3000)
}

//callback function

function handleUserData(error,user){
  if(error)
  {
    console.log('Error :'+error)
  }
  else
  {
    console.log('user data ',user)
  }
}

fetchUserData(2,handleUserData)