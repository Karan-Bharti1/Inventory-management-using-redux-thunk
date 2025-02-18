import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../actions";


 const AddNewItems=()=>{
    const [inventoryData,setInventoryData]=useState({
        itemName:"",
        itemQuantity:"",
        entryType:""

    })
    const [successMessage,setSuccessMessage]=useState("")
    const dispatch=useDispatch()
    const handleChange=(key,value)=>{
setInventoryData(key==="itemQuantity"?{...inventoryData,itemQuantity:parseFloat(value)}:{...inventoryData,[key]:value})
    }
    const formHandler=(e)=>{
e.preventDefault()
dispatch(addItems(inventoryData))
setInventoryData({itemName:"",
itemQuantity:"",
entryType:""})
setSuccessMessage("Data Updated")
setTimeout(()=>{
setSuccessMessage("")
},1500)
    }
    return(<main className="container">
   <h1>Inventory Admin App</h1>
   <form>
 <label htmlFor="name">Item name:</label><input id="name" onChange={(event)=>handleChange("itemName",event.target.value)} value={inventoryData.itemName} className="form-control"/>
 <br/>
 <label htmlFor="quanity">Item Quanity:</label><input id="quanity" onChange={(event)=>handleChange("itemQuantity",event.target.value)} value={inventoryData.itemQuantity} className="form-control"/>
<br/>
<label htmlFor="entryType">Entry Type:</label>
<select className="form-control" id="entryType" onChange={(event)=>handleChange("entryType",event.target.value)}>
<option value="">Select Field</option>
<option value="Add to storage">Add to storage</option>
<option value="Remove from storage">Remove from storage</option>
</select>
<button className="btn btn-primary my-2" onClick={formHandler}>Add Item Data</button>
   </form>
   <h2>{successMessage}</h2>
    </main>)
}
export default AddNewItems;