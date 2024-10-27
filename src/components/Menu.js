import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch, useStore } from "react-redux";
import { addToCart } from "../actions/cartActions";

function Menu() {
  const dispatch = useDispatch();
  let selector = useSelector((state) => state.cart);
  const store = useStore();

  const handleClick = () => {
    dispatch(addToCart({ menu_item: "spaghetti", menu_price: 12.99 }));

    selector = store.getState().cart;
    console.log(selector);
    console.log("button was pressed");
  };
  return (
    <div>
      <h1>Sphagetti Shack Menu!!</h1>
      <div>
        <Button onClick={handleClick}>Sphagetti Button Gimme</Button>
      </div>
    </div>
  );
}

export default Menu;
