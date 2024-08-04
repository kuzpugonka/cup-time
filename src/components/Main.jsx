import { Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { Promo } from "./Promo";
import { Cart } from "./Cart";
import { Order } from "./Order";

export const Main = () => {
  return (
    <main className="main">
    <Routes>
      <Route path="/" element={
        <>
          <Promo />
          <Products />
        </>
      } />
      <Route path="/cart" element={
        <>
          <Cart />
          <Order />
        </>
       } />
    </Routes>     
    </main>
  );
};
