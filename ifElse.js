function checkAge(age)
{
    if(age>=18)
        console.log("adult")
    else
        console.log("minor")
}

checkAge(20)

function checkGrade(score)
{
    if(score>=90)
        console.log("Grade A")
    else if (score >=70)
        console.log("Grade B")
    else if (score >=50)
        console.log("Grade C")

}

checkGrade(60)

let browser ="Chrome"
if(browser==="Edge")
    console.log("Edge launched")
else if (browser==="Safari")
    console.log("Safari launched")
else if (browser==="Chrome")
    console.log("Chrome launched")
else
    console.log("Invalid browser")

