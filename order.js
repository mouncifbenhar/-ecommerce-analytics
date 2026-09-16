export async function getOrders() {
    
    try{
        const responst = await fetch("orders.json")
        const data = responst.json()
        return data
    }catch(error){
        return error
    }
}