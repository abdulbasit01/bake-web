import React, { Component } from 'react';
import {buyCake} from "../redux/Cakes/cakeAction"
import {connect} from "react-redux"
import Cake from "../cake.jpg"

import Product from "./product"
class CakeContainer extends Component {

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
                
                <Product type={'Cake'} src={Cake} name={'cake'} numberOfProduct={this.props.numberOfCake} bought={this.props.cakeBought} buy={this.props.buyCake} price={this.props.price}></Product>
                
            </div>
         );
    }
}
 

const mapStateToProps=state=>{
    return{
        numberOfCake:state.cake.numberOfCake,
        cakeBought:state.cake.cakeBought,
        price:state.cake.price 
    }
}

const mapStateToDispatch=dispatch=>{
    return{
        buyCake:()=>{dispatch(buyCake())}
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(CakeContainer)