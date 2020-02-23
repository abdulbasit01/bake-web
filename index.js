const redux = require("redux");

const reduxLogger=require('redux-logger')

const logger=reduxLogger.createLogger()

const middleWare=redux.applyMiddleware

const createStore = redux.createStore

const combineReducer=redux.combineReducers

const BUY_CAKE= "BUY_CAKE";

const BUY_ICECREAM= "BUY_ICECREAM";



function buyCake(){
    return{
        type:BUY_CAKE,
        info:"first redux action"
    }
}
function buyIcecream(){
    return{
        type:BUY_ICECREAM,
        info:"first redux action"
    }
}



//make reducer 
// (initial state , action to be performed) => new state


// let initialState={
//     numberOfCakes:10,

//     numberOfIcecreams:20
// }


// const reducer = (state = initialState,action) => {
//     switch (action.type) {
//         case BUY_CAKE: return{
//             ...state,
//             numberOfCakes:state.numberOfCakes-1,
//         }

//         case BUY_ICECREAM: return{
//             ...state,
//             numberOfIcecreams:state.numberOfIcecreams-2

//         }
//         default:
//             return state
//     }
// }

//multiple reducer and multiple states

let initCakes={
    numberOfCakes:10
}

let initIcreCream={
    numberOfIcecreams:20
}


const cakeReducer=(state=initCakes,action)=>{
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numberOfCakes:state.numberOfCakes-1
            }
        default :return state
    }

}

const iceCreamReducer =(state=initIcreCream,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIcecreams:state.numberOfIcecreams-1
            }
        default :return state
    }
}


const rootReducer=combineReducer({
    iceCream:iceCreamReducer,
    cake:cakeReducer
})


const store = createStore(rootReducer,middleWare(logger))


console.log(store.getState())


const unsubscribe=store.subscribe(()=>{store.getState()})

store.dispatch(buyCake())
store.dispatch(buyCake())


store.dispatch(buyIcecream())

unsubscribe()
