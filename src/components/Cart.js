import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useStore } from "react-redux";

function Cart() {
  let selector = useSelector((state) => state.cart);
  const store = useStore();
  selector = store.getState().cart;

  function handleCheckout(e) {
    e.preventDefault();
    console.log(e);
  }

  function handleCardNumChange(e) {
    e.preventDefault();
    const card = e.target.value;
    const count = card.replaceAll("-", "").length;

    if (isNaN(Number(card.charAt(card.length - 1)))) {
      e.target.value = card.slice(0, -1);
      return;
    }
    if (count >= 16) {
      e.target.value = card.slice(0, 19);
      return;
    }
    if (count % 4 === 0) {
      e.target.value += "-";
    }
  }

  return (
    <div>
      <h1>Sphagetti Shack Catering!!!</h1>
      {selector.map((item, i) => {
        return <h2 key={i}>{item.menu_item + " " + item.menu_price}</h2>;
      })}

      <Form onSubmit={handleCheckout}>
        <Form.Group controlId="card_num">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            onChange={handleCardNumChange}
          />
        </Form.Group>
        <Form.Group controlId="card_cvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="text" placeholder="123" />
        </Form.Group>
        <Form.Group controlId="expiry_date">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="text" placeholder="MM/YYYY" />
        </Form.Group>
        <Button type="submi">Place Order</Button>
      </Form>
    </div>
  );
}

export default Cart;
