export async function getCustomers() {
    
    try{
        const responst = await fetch("customers.json")
        const data = responst.json()
        return data
    }catch(error){
        return error
    }
}