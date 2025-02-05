import { ADD_SUCCESS, INVENTORY_SUCCESS, REMOVED_SUCCESS } from "./actions";

const initialState={inventory:[],removed:[]}
const inventoryReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_SUCCESS:
        if(action.payload.entryType==="Add to Storage")
        {return {
            ...state,inventory:[...state.inventory,action.payload]
        }}else if(action.payload.entryType==="Remove from Storage"){
return {...state,removed:[...state.removed,action.payload]}
        }
        case INVENTORY_SUCCESS:
            return {...state,inventory:action.payload}
            case REMOVED_SUCCESS:
            return {...state,removed:action.payload}
    default:
        return state
}
}
export default inventoryReducer;