class Customer{

    age = 25

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
const cust2 =new Customer('PD11','MacBook1')
console.log(cust1.name)
console.log(cust1.product)
cust1.addToCart()
cust2.addToCart()
console.log(cust1.age)
console.log(cust2.age)
