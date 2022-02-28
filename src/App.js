import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { Route, Routes, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/signin"
          element={
            currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

export default App;
