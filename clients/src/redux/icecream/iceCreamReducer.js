import {BUY_ICECREAM} from './Type'

const initialState={
    numberOfIceCream:20,
    IceCreamBought:0,
    price:0
}

const reducerIceCream =(state=initialState, action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIceCream:state.numberOfIceCream >0 ? state.numberOfIceCream-1: 0,
                IceCreamBought:state.numberOfIceCream >0 ? state.IceCreamBought+1: 20,
                price:state.numberOfIceCream >0 ?state.price+10 :200
            }
            break;
    
        default:
            return state 
    }
}

export default reducerIceCream