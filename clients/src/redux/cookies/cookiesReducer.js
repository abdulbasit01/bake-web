import {BUY_COOKIES} from "./Type"

const initialState={
    numberOfCookie:40,
    cookieBought:0,
    price:0
}

const reducerCake=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_COOKIES:
            return{
                ...state,
                numberOfCookie:state.numberOfCookie >0 ? state.numberOfCookie-1: 0,
                cookieBought:state.numberOfCookie >0 ? state.cookieBought+1: 10,
                price:state.numberOfCookie >0 ?state.price+5 :200
            }
        default:
            return state 
    }
}

export default reducerCake