//Object Literals

const user ={
    name:'John',
    age:30,
    country:'USA',
    fullName : function()
    {
        return this.name + ' '+this.age
    }
}

console.log(user.name)
console.log(user.fullName())

//Constructor Function

function Car(brand,model,price)
{
    this.brand=brand,
    this.model=model,
    this.price=price
}

const c1=new Car('BMW','52d',10000)
const c2=new Car('Audi','52d',10000)

console.log(c1.brand)
console.log(c2.brand)

//Class style

class Customer{

    constructor(name,product)
    {
        this.name=name,
        this.product=product
    }

    addToCart()
    {
        console.log(this.product+" added to cart")
    }

}

const cust1= new Customer('PD','MacBook')
console.log(cust1.name)
console.log(cust1.product)
cust1.addToCart()



