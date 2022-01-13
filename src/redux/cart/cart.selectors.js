import {createSelector} from 'reselect'

const selectCart = state=> state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity,cartItem) => cartItem.quantity + accumulatedQuantity, 0 )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedPrice,cartItem) => cartItem.price * cartItem.quantity + accumulatedPrice, 0 )
)