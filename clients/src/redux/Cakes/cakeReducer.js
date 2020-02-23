import {BUY_CAKE} from "./Type"

const initialState={
    numberOfCake:10,
    cakeBought:0,
    price:0
}

const reducerCake=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numberOfCake:state.numberOfCake >0 ? state.numberOfCake-1: 0,
                cakeBought:state.numberOfCake >0 ? state.cakeBought+1: 10,
                price:state.numberOfCake >0 ?state.price+20 :200
            }
        default:
            return state 
    }
}

export default reducerCake