
function varExample()
{
    var x=1;
    if(true)
    {
       // var x=2
        console.log(x) //still valid
    }

    console.log(x)
}

//varExample()

function letExample()
{
    let x=1;
    if(true)
    {
        //let x=2
        console.log(x)
    }

    console.log(x)
}

//letExample()

function constExample()
{
    const x=1;
    if(true)
    {
        const x=2
        console.log(x)
    }
    console.log(x)
}

constExample()
