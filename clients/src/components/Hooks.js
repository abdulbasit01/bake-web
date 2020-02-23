import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { buyCake } from '../redux/Cakes/cakeAction'
    
function Hooks() {
    const numberOfCake=useSelector(state=>state.numberOfCake)

    const dispatch =useDispatch()

    const numberOfCakeBought=useSelector(state=>state.cakeBought)

    return (
        <div>
            <p>number of cakes - {numberOfCake} </p>

            <p>number of cakes - {numberOfCakeBought} </p>

            <button onClick={()=>{dispatch(buyCake())}}>buy cake</button>
        </div>
    )
}

export default Hooks
