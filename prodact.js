export async function getProdact() {
    
    try{
        const responst = await fetch("products.json")
        const data = responst.json()
        return data
    }catch(error){
        return error
    }
}