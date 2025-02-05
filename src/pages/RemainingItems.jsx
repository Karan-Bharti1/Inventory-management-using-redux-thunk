import { useEffect } from "react";
import Header from "../components/Header";
import { useSelector,useDispatch } from "react-redux";
import { inventoryItems, removedItems } from "../actions";
const RemainingItems=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(removedItems())
    dispatch(inventoryItems())
    })
    const inventory=useSelector(state=>state.inventory)
    const totalInventory=inventory?.reduce((acc,curr)=>acc+curr.itemQuantity,0)
    const removed=useSelector(state=>state.removed)
    const totalRemoved=removed?.reduce((acc,curr)=>acc+curr.itemQuantity,0)
    const remainingItems=totalInventory-totalRemoved
    return(<>
    <Header/>
    <main className="container">
    <h1>Remaining Items In Inventory</h1>
    {totalInventory>0 && totalRemoved>0 &&<h2>Inventory Total: {remainingItems}</h2>}
    </main>
    </>)
}
export default RemainingItems;