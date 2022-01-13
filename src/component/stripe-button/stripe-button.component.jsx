import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KHPfpSH3tePIuQLRGzrX1MxXYDpvkwytIyZgQK0U7RtsMfieTXXSoaLyuUeURKupYczQLItlhdMjjETXakvYXTO00U2ztvVV3'

    const onToken = token =>{
        console.log(token);
        alert("Payment successful")
    }

    return (
        <StripeCheckout 
             label="Pay Now"
             name = "CROWN CLOTHING Ltd."
             billingAddress
             shippingAddress
             image="https://stripe.com/img/documentation/checkout/marketplace.png"
             description={`Your total is ₹${price}`}
             amount={priceForStripe}
             panelLabel="Pay Now"
             token={onToken}
             stripeKey={publishableKey}
        />
    )
} 

export default StripeCheckoutButton