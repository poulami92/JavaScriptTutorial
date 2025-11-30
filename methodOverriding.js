class Car{

    minSpeed = 100

    constructor()
    {
        console.log('parent constructor called')
    }

    startEngine()
    {
        console.log('Staring Engine....Car')
    }
}

class Audi extends Car{
    
    minSpeed = 200
    startEngine()
    {
         console.log('Staring Engine...Audi')
    }
}

const audi = new Audi()
audi.startEngine()
const car = new Car()
car.startEngine()
console.log(car.minSpeed)
console.log(audi.minSpeed)
