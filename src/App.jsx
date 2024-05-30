import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import StartScreen from "./screen/startScreen/StartScreen";
import AccountScreen from "./screen/accountScreen/accountScreen";
import LoginScreen from "./screen/loginScreen/loginScreen";
import ClothingPage from "./screen/clothingScreen/ClothingPage";
import ProductOptions from "./screen/itemOptions/productOptions"
import Cart from "./screen/cartScreen/cart";
import Payment from "./screen/paymentScreen/payment"
import Vouchers from "./screen/voucherScreen/vouchers"
import Favorite from "./screen/favoriteScreen/favorite"

function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/create-account" element={<AccountScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/clothing" element={<ClothingPage />} />
          <Route path="/product-option/:productId" element={<ProductOptions />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/vouchers" element={<Vouchers />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
