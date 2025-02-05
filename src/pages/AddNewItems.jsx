

 const AddNewItems=()=>{
    return(<main className="container">
   <h1>Inventory Admin App</h1>
   <form>
 <label htmlFor="name">Item name:</label><input id="name" className="form-control"/>
 <br/>
 <label htmlFor="quanity">Item Quanity:</label><input id="quanity" className="form-control"/>
<br/>
<label htmlFor="entryType">Entry Type:</label>
<select className="form-control" id="entryType">
<option value="">Select Field</option>
<option value="Add to storage">Add to storage</option>
<option value="Remove from storage">Remove from storage</option>
</select>
<button className="btn btn-primary my-2">Add Item Data</button>
   </form>
    </main>)
}
export default AddNewItems;