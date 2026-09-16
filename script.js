import { getProdact } from "./prodact.js"
import { getOrders } from "./order.js"
import { getCustomers } from "./customer.js"

const prodects = await getProdact()
const orders = await getOrders()
const customer = await getCustomers()

console.log(prodects)
console.log(orders)
console.log(customer)


function disply_prodact(prodects){
const table = document.querySelector("#table")
table.textContent = "";
prodects.forEach(prodect => {
const tr = document.createElement("tr")
const prodact_name = document.createElement("td")
prodact_name.textContent = `prodact : ${prodect.name} - category: ${prodect.category} - price: ${prodect.price} - stock: ${prodect.stock} - rating: ${prodect.rating}`

tr.appendChild(prodact_name)
table.appendChild(tr)

});
}




const button = document.querySelector("#disply_prodact")
const search = document.querySelector("#search")
const fstock_faible = document.querySelector("#stock_faible")
const on_stock = document.querySelector("#on_stock")
const descending = document.querySelector("#descending")
const ascending = document.querySelector("#ascending")





button.addEventListener("click",()=>{disply_prodact(prodects)})

search.addEventListener("click",()=>{
    
    let sub_prodects = [...prodects]
    const input = document.getElementById("prodact_category")
    let category = input.value
    const result = sub_prodects.filter((e)=> e.category == category)
    disply_prodact(result)

})

fstock_faible.addEventListener("click",()=>{
    let sub_prodects = [...prodects]
    let stock_f = sub_prodects.filter((e)=> e.stock <= 0)
    disply_prodact(stock_f)
})

on_stock.addEventListener("click",()=>{
    let sub_prodects = [...prodects]
    let on_stock = sub_prodects.filter((e)=> e.stock > 0)
    disply_prodact(on_stock)
})

descending.addEventListener("click",()=>{
    let sub_prodects = [...prodects]
    let descending = sub_prodects.sort((a,b) => a.price - b.price)
    disply_prodact(descending)
})

ascending.addEventListener("click",()=>{
    let sub_prodect = [...prodects]
    let ascending = sub_prodect.sort((a,b) => b.price - a.price )
    console.log(ascending)
    disply_prodact(ascending)
})







// {
//     "id": 24,
//     "name": "Podcast Microphone Lite",
//     "category": "Audio",
//     "price": 83,
//     "stock": 22,
//     "rating": 4.8
//   },





