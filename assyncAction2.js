const redux = require('redux');

const axios=require('axios')

const reduxThunk=require('redux-thunk').default

const applyMiddleware=redux.applyMiddleware


const createStore=redux.createStore

const FETCH_USER_REQUEST="FETCH_USER_REQUEST"

const FETCH_USER_SUCCESS ="FETCH_USER_SUCCESS"

const FETCH_USER_FAILURE='FETCH_USER_FAILURE'

const initialState={
    loading:false,
    users:[],
    error:''
}

//making actions

//action return two thing one is type other is payload

const fectUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fectUserFailure=(error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error

    }
}

const fectUserSuccess=user=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}


const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                user:action.payload
            }
        
    
        default:
            break;
    }
}

const fetchUser=()=>{
    return function(dispatch){
        dispatch(fectUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (res=>{
            id=res.data.map(_id=>_id.id)
            name=res.data.map(_name=>_name.name)
            website=res.data.map(_website=>_website.website)


            dispatch(fectUserSuccess([id,name,website]))
        })
        .catch(error=>{error.message})
    }
} 

const store=createStore(reducer,applyMiddleware(reduxThunk));


store.subscribe(()=>{console.log(store.getState())})

store.dispatch(fetchUser())
