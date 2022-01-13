import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { selectCartTotal } from '../../redux/cart/cart.selectors'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../component/checkout-item/checkout-item.component'
import './checkout.styles.scss'

import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component'

function CheckoutPage({cartItems, total}) {

    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
            </div>

                <div className="header-block">
                    <span>Quantity</span>
            </div>

                <div className="header-block">
                    <span>Price</span>
            </div>

                <div className="header-block">
                    <span>Remove</span>
            </div>
            </div>

            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className="total"><span>TOTAL: ₹{total}</span></div>
            <div className="test-warning">
                *Please use the following testcredit card for payments* 
                <br/>
                4242 4242 4242 4242  -Exp: 01/30 - CVV: 123
            </div>
            <StripeCheckoutButton price={total}  />
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

//     OR

// const mapStateToProps = state=>({
//     cartItems: selectCartItems(state),
//     total: selectCartTotal(state)
// })


export default connect(mapStateToProps)(CheckoutPage)
