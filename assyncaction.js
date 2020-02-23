const redux = require('redux');


const applyMiddleWare=redux.applyMiddleware

const reduxThunk= require('redux-thunk').default

const axios=require('axios')

const createStore = redux.createStore


const initial_state={
    loading:false,
    user:[],
    error:""
}


const FETCH_USER_REQUEST='FETCH_USER_REQUEST';

const FETCH_USER_FAILURE='FETCH_USER_FAILURE';

const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS';


const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchUserFailure=(error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

const fetchUserSuccess=(user)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}


const reducer=(state=initial_state,action)=>{
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload
            }
        case FETCH_USER_FAILURE:
            return{
                ...state,
                error:action.payload
            }
            case FETCH_USER_REQUEST:
                return{
                    ...state,
                    loading:true
                }
            
            break;
    
        default:
            break;
    }
}


const fetchUser=()=>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const data=res.data.map(user=>{
                return (user.username)
            })
            dispatch(fetchUserSuccess(data))
        })
        .catch(error=>{dispatch(fetchUserFailure(error.message))})

    }
}
const store= createStore(reducer, applyMiddleWare(reduxThunk))

store.subscribe(()=>{console.log(store.getState())})

store.dispatch(fetchUser())