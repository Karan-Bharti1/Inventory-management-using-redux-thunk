import { addToStoreURL, removeFromStorageURL } from "./urls"

export const ADD_SUCCESS="items/add"
export const INVENTORY_SUCCESS="items/inventory"
export const REMOVED_SUCCESS="items/removed"
export const addItems=(entry)=>async(dispatch)=>{
    try {
        const response=await fetch(entry.entryType==="Add to storage"?addToStoreURL:removeFromStorageURL,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(entry)
        })
        
        const data=await response.json()
        if(data.success===true){
       dispatch ({type:ADD_SUCCESS,payload:data.data})
        }
    } catch (error) {
        console.log("Error adding entry: ",error)
    }
}