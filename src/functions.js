// function addToCart(quantity,productName="Bilgisayar" ) {
//     console.log(quantity+" adet "+ productName+ " sepete eklendi") 
// }

// addToCart();
// // addToCart(3,"Apple MacBook Pro");
// addToCart(10)

// let sayHello = () =>{
//     console.log("Hello")
// }

// sayHello();

// let sayHello2 = function () {
//     console.log("Hello World")
// }

// sayHello2();

// function addToCart2(productName, unitPrice, quantity) {

// }

// addToCart2("phone", 5, 1000)

// let product1 = {productName:"phone", unitPrice:1000, quantity:3}

// function addToCart3(product) {
//     console.log("Ürün: "+product.productName)
//     console.log("Adet: "+product.quantity)
//     console.log("Fiyat: "+product.unitPrice)
// }

// addToCart3(product1);

// let product2 = {productName:"phone", unitPrice:1000, quantity:3}
// let product3 = {productName:"phone", unitPrice:1000, quantity:3}
// product2 = product3
// product2.productName = "computer"
// console.log(product3)

// function addToCart4(products) {
//     console.log(products)
// }

// products = [
//     {productName:"phone", unitPrice:1000, quantity:3},
//     {productName:"phone", unitPrice:1000, quantity:3},
//     {productName:"phone", unitPrice:1000, quantity:3}
// ]

// addToCart4(products)

function add(number1, number2) {
    console.log(number1 + number2)
}

add(3,4)

function add(...numbers) {
    console.log(numbers) 
}

function add(...numbers) { //rest 
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
       total = total + numbers[i]
    }
    console.log(total)
}

add(20,30,40,50)

let numbers = [40,30,50,23]

console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"35M"},
    {name:"Karadeniz", population:"15M"},
    [
        ["Ankara","Kayseri"],
        ["İstanbul","Bursa"],
        ["Samsun","Trabzon"],
    ]
]

console.log(icAnadolu.name)
console.log(marmara.population)
console.log(karadeniz.karadenizSehirleri)