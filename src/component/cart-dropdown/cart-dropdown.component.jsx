import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.components";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";


import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, dispatch})=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length 
                    ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
                    :
                    <div className="empty-message">Your cart is empty</div>
                }
            </div>
            <CustomButton onClick={()=> dispatch(toggleCartHidden())} > <Link to='/checkout' className="checkout-link"> GO TO CHECKOUT </Link> </CustomButton>

        </div>
    )
}

const mapStateToProps = (state) => ({
   cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)