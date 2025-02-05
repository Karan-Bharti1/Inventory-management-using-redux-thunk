import { ADD_SUCCESS } from "./actions";

const initialState={inventory:[],remaining:[],removed:[]}
const inventoryReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_SUCCESS:
        if(action.payload.entryType==="Add to Storage")
        {return {
            ...state,inventory:[...state.inventory,action.payload]
        }}
    default:
        return state
}
}
export default inventoryReducer;