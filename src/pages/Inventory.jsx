import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useEffect } from "react";
import { inventoryItems } from "../actions";

const Inventory=()=>{
    const inventory=useSelector(state=>state.inventory)
    const totalInventory=inventory.reduce((acc,curr)=>acc+curr.itemQuantity,0)

    const dispatch=useDispatch()
useEffect(()=>{dispatch(inventoryItems())},[dispatch])
    return(<>
    <Header/>
    <main className="container">
    <h1>Inventory Items</h1>
    <ul className="list-group">
        {
            inventory?.map((item,index)=><li className="list-group-item" key={index}>{item.itemName} {item.itemQuantity}</li>)
        }
    </ul>
    <hr/>
    <h2 className="my-2">Total Inventory Items: {totalInventory}</h2>
    </main>
    </>)
}
export default Inventory;