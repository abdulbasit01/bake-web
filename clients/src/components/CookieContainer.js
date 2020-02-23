import React, { Component } from 'react';
    import {connect} from "react-redux"
import Cookie from "../cookies.jpg"

import {buyCookie}from "../redux/cookies/cookiesAction"
import Product from "./product"
class CakeContainer extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state={
            reduxState:this.props,
            
        }
    }
    render() { 
        return ( 
            <div className="container bg-success">
                
                <Product type={'Cookies'} src={Cookie} name={'Cookie'} numberOfProduct={this.props.numberOfCookie} bought={this.props.cookieBought} buy={this.props.buyCookie} price={this.props.price}></Product>
                
            </div>
         );
    }
}
const mapStateToProps=state=>{
    return{
        numberOfCookie:state.cookie.numberOfCookie,
        cookieBought:state.cookie.cookieBought,
        price:state.cookie.price
    }
}
const mapStateToDispatch=dispatch=>{
    return{
        buyCookie:()=>{dispatch(buyCookie())}
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(CakeContainer);