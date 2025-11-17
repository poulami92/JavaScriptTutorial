function checkDayOfWeek(day)
{
    let dayName
    switch(day)
    {
        case 0:
            dayName="Monday"
            break
        case 1:
            dayName="Tuesday"
            break
        case 2:
            dayName="Wednesday"
            break  
        case 3:
            dayName="Thursday"
            break 
        default:  
            dayName="invalid day"       

    }

    return dayName
}

console.log(checkDayOfWeek(0))
console.log(checkDayOfWeek(3))
console.log(checkDayOfWeek(7))