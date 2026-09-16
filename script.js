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
const prodact_name = document.createElement("th")
prodact_name.textContent = `prodact : ${prodect.name} - category: ${prodect.category} - price: ${prodect.price} - stock: ${prodect.stock} - rating: ${prodect.rating}`

tr.appendChild(prodact_name)
table.appendChild(tr)

});
}




const button = document.querySelector("#disply_prodact")
const search = document.querySelector("#search")

button.addEventListener("click",()=>{disply_prodact(prodects)})

search.addEventListener("click",()=>{
    
    let sub_prodects = [...prodects]
    const input = document.getElementById("prodact_name") 
    let name = input.value
    const result = sub_prodects.filter((e)=> e.name == name)
    disply_prodact(result)

})







// {
//     "id": 24,
//     "name": "Podcast Microphone Lite",
//     "category": "Audio",
//     "price": 83,
//     "stock": 22,
//     "rating": 4.8
//   },





