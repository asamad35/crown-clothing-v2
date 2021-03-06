import React from 'react'

import { connect } from 'react-redux'
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.action'

import './checkout-item.styles.scss'


function CheckoutItem({cartItem, clearItem, addItem, removeItem}) {
   const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='checkout-item' >
            <div className="image-container">
                <img src={imageUrl} alt="alt" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> removeItem(cartItem)} >&#10094;</div>
                 <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <span onClick={()=> clearItem(cartItem)} className="remove-button">&#10005;</span>
        </div>
    )
}

const mapDispatchToprops = dispatch =>({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item)),


})

export default connect(null,mapDispatchToprops)(CheckoutItem)
