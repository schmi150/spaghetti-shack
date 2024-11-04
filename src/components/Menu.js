import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch, useStore } from "react-redux";
import { addToCart } from "../actions/cartActions";

function Menu() {
  const dispatch = useDispatch();
  let selector = useSelector((state) => state.cart);
  const store = useStore();
  // cont[(index, setIndex)] = useState("");
  const menu_items = [
    {
      item: "Spaghetti",
      price: 12.99,
    },
    {
      item: "Meatballs",
      price: 4.99,
    },
    {
      item: "Garlic Bread",
      price: 3.99,
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const index = e.target.elements[0].name.substring(5);
    console.log(e.target.elements[0].name.substring(5));
    dispatch(
      addToCart({
        menu_item: menu_items[index].item,
        menu_price: menu_items[index].price,
      })
    );

    selector = store.getState().cart;
    console.log(selector);
    console.log("button was pressed");
  };
  return (
    <div>
      <h1>Sphagetti Shack Menu!!</h1>
      <div>
        {menu_items.map((menuItem, i) => {
          return (
            <Form onSubmit={handleClick} key={i}>
              <Form.Group controlid={"menu_item_" + i}>
                <Form.Label>
                  {menuItem.item + ": " + menuItem.price}
                  <Button type="submit" name={"item_" + i}>
                    Add to Cart
                  </Button>
                </Form.Label>
              </Form.Group>
            </Form>
          );
        })}

        {/* <Button onClick={handleClick}>Sphagetti Button Gimme</Button> */}
      </div>
    </div>
  );
}

export default Menu;
