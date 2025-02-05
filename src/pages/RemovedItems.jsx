import { useDispatch,useSelector } from "react-redux";
import Header from "../components/Header";
import { useEffect } from "react";
import { removedItems } from "../actions";

const RemovedItems=()=>{
    const removed=useSelector(state=>state.removed)
    const totalRemoved=removed?.reduce((acc,curr)=>acc+curr.itemQuantity,0)
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(removedItems())})
    return(<>
    <Header/>
    <main className="container">
        <h1>Removed Items From Inventory</h1>
        <ul className="list-group">
        {
            removed?.map((item,index)=><li className="list-group-item" key={index}>{item.itemName} {item.itemQuantity}</li>)
        }
    </ul>
    <hr/>
    <h2  className="my-2">Total Items Removed : {totalRemoved}</h2>
    </main>
    </>)
}
export default RemovedItems;