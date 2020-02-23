import {createStore} from "redux"

import reducerCake from "./redux/Cakes/cakeReducer"


import rootReducer from './rootStore'
const store =createStore(rootReducer)

export default store