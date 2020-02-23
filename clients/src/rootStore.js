import {combineReducers} from "redux"

import Cake from "./redux/Cakes/cakeReducer"

import IceCream from "./redux/icecream/iceCreamReducer"

import Cookie from './redux/cookies/cookiesReducer'
const rootReducer=combineReducers({
    cake:Cake,
    iceCream:IceCream,
    cookie:Cookie
})


export default rootReducer