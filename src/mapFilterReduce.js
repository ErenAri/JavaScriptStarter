let cart = [
    {id:1, productName:"Telefon", quantity:3, UnitPrice:4000},
    {id:1, productName:"Tablet", quantity:3, UnitPrice:5000},
    {id:1, productName:"Kulaklık", quantity:3, UnitPrice:700},
    {id:1, productName:"Saat", quantity:3, UnitPrice:2000},
    {id:1, productName:"Bilgisayar", quantity:3, UnitPrice:7000},
]


console.log("<ul>")
cart.map(product=>{console.log("<li>"+product.productName + ": "+ product.UnitPrice * product.quantity+"</li>")})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.UnitPrice * product.quantity,0)
console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)


function addToCart(cart) {
    cart.push({id:1, productName:"Monitör", quantity:2, UnitPrice:2500})
}

addToCart(cart)

console.log(cart)

