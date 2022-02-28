import { all, call } from "redux-saga/effects";

import { cartSagas } from "./cart/cart.sagas";
import { shopSaga } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  // "all" is used to call all the functions in the array in parallel.
  yield all([call(shopSaga), call(userSagas), call(cartSagas)]);
}
