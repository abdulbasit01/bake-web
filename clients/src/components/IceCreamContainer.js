import React, { Component } from 'react';
import {buyIceCream} from "../redux/icecream/iceCreamAction"
import {connect} from "react-redux"
import IceCream from "../icecream.jpg"

import Product from "./product"
class IceCreamContainer extends Component {

    constructor(props) {
        super(props);
    
        console.log(this.props)
        this.state={
            reduxState:this.props,
            numberOfCake:this.props.numberOfCake
            
        }
    }
    render() { 
        return ( 
            <div className="container bg-success">
                
                <Product type={'Ice Cream'}src={IceCream} name={'Ice Cream'} numberOfProduct={this.props.numberOfIceCream} bought={this.props.IceCreamBought} buy={this.props.buyIceCream} price={this.props.price}></Product>
                
            </div>
         );
    }
}
 

const mapStateToProps=state=>{
    return{
        numberOfIceCream:state.iceCream.numberOfIceCream,
        IceCreamBought:state.iceCream.IceCreamBought,
        price:state.iceCream.price
    }
}

const mapStateToDispatch=dispatch=>{
    return{
        buyIceCream:()=>{dispatch(buyIceCream())}
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(IceCreamContainer)