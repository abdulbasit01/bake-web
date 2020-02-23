import React from 'react'

import "../App.css"
function Product(props) {
    console.log(props)
    
    return (
        <div className="container bg-success">
            <div className='row'>
                <div>
                    <h2>{props.type}</h2>
                    <img src={props.src} height='200' width='150'/>
                    <br/>
                    <p className="badge">{props.price} Rs/- </p>
                </div>
                <p className="text-danger">{props.name} left in the stock {props.numberOfProduct}</p>
                <button className="btn btn-info" onClick={props.buy}>+</button>
                <p className='text.success'>you bought {props.bought}</p>
                <div className="border-bottom customLine">xx------xx</div>
            </div>
        </div>
    )
}

export default Product

