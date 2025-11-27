class Car{
    static wheels=4

    constructor(name,model,price)
    {
        this.name= name,
        this.model=model,
        this.price=price,
        this.wheels=50
    }

    static stop()
    {
        console.log('car stop')
    }

    drive()
    {
        console.log('car drive :'+this.name)
    }

}

const c1 = new Car('Honda',2024,50)
console.log(c1.name)
console.log(c1.wheels)
console.log(Car.wheels)
Car.stop()
c1.drive()