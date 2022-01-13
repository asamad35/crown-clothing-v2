import React from "react";
import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CartItem from "../cart-item/cart-item";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden, itemCount})=>{
    return(
    <div className="cart-icon" onClick={toggleCartHidden} >
        <ShoppingIcon className="shopping-icon" />
        <div className="item-count">{itemCount}</div>
    </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);