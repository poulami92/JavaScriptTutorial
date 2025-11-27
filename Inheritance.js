class AutoMobile
{
    constructor(chasisNo)
    {
      this.chasisNo=chasisNo
    }

    userAeroDynamic()
    {
        console.log('Automobile -- aerodynamic '+this.chasisNo)
    }
}


class Vehicle extends AutoMobile{
    constructor(make,model,year)
    {
        super(1000)
        this.make=make,
        this.model=model,
        this.year= year
    }

    getInfo()
    {
        return `${this.make},${this.model},${this.year}`
    }

    startEngine()
    {
        console.log('Starting Engine...'+this.make)
    }

     stopEngine()
    {
        console.log('Stopping Engine...')
    }
}


class Car extends Vehicle
{
    constructor(make,model,year,fuelType)
    {
        super(make,model,year)
        this.fuelType=fuelType
    }

    driveCar()
    {
        console.log('Driving car '+this.model+' '+this.fuelType)
    }
}

class Truck extends Vehicle
{
    constructor(make,model,year,loadCapacity)
    {
        super(make,model,year)
        this.loadCapacity=loadCapacity
    }

    driveTruck()
    {
        console.log('Driving truck '+this.model+' capacity '+this.loadCapacity)
    }
}


const car = new Car('Honda','Civic',2003,'Petrol')
const truck = new Truck('Tata','Sumo',2020,100)

car.startEngine()
console.log(car.getInfo())
car.driveCar()
car.userAeroDynamic()
console.log(car.chasisNo)

truck.startEngine()
console.log(truck.getInfo())
truck.driveTruck()
