import React from "react";
import { useSelector, useDispatch, useStore } from "react-redux";

function Cart() {
  let selector = useSelector((state) => state.cart);
  const store = useStore();
  console.log(store.getState().cart);
  return (
    <div>
      <h1>Sphagetti Shack Catering!!!</h1>
    </div>
  );
}

export default Cart;
