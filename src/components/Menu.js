import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch, useStore } from "react-redux";
import { addToCart } from "../actions/cartActions";

function Menu() {
  const dispatch = useDispatch();
  let selector = useSelector((state) => state.cart);
  const store = useStore();
  let index = 0;
  // cont[(index, setIndex)] = useState("");
  const menu_cue = [
    "1. PICK THE SIZE",
    "2. PICK THE PASTA",
    "3. PICK THE SAUCE",
    "4. PICK THE PROTEIN",
  ];
  const menu_items = {
    build_shack: [
      {
        box_description: "BUILD YOUR SHACK",
        item_choice: [
          [
            {
              item: "Small Shack",
              price: 8.99,
            },
            {
              item: "Mid Shack",
              price: 15.99,
            },
            {
              item: "Full Shack",
              price: 27.99,
            },
          ],

          [
            {
              item: "spaghetti",
            },
            {
              item: "penne",
            },
          ],
          [
            {
              item: "Classic Red",
              price: 0.0,
            },
            {
              item: "Pink Sauce",
              price: 1.5,
            },
            {
              item: "Alfredo",
              price: 3.0,
            },
          ],
          [
            {
              item: "Meatball",
              price: 1.99,
            },
            {
              item: "Italian Sausage Link",
              price: 3.99,
            },
            {
              item: "Breaded Chicken Breast",
              price: 3.99,
            },
          ],
        ],
      },
    ],
  };

  const handleClick = (e) => {
    e.preventDefault();
    const index = e.target.elements[0].name.substring(5).split(",");
    //console.log(e.target.elements[0].name.substring(5));
    dispatch(
      addToCart({
        menu_item:
          menu_items.build_shack[0].item_choice[index[0]][index[1]].item,
        menu_price:
          menu_items.build_shack[0].item_choice[index[0]][index[1]].price,
      })
    );

    selector = store.getState().cart;
  };
  return (
    <div>
      <h1>Sphagetti Shack Menu!!</h1>
      <div>
        {menu_items.build_shack.map((menu_build, k) => {
          return (
            <div>
              <h2>{menu_build.box_description}</h2>
              {menu_build.item_choice.map((menuItem, i) => {
                return (
                  <div>
                    <h3>{menu_cue[i]}</h3>
                    {menuItem.map((item, j) => {
                      return (
                        <Form onSubmit={handleClick} key={i + "," + j}>
                          <Form.Group controlid={"menu_item_" + j}>
                            <Row>
                              <Col>
                                <Form.Label>
                                  <h4>
                                    {item.item +
                                      (item.price === undefined
                                        ? ""
                                        : " : " + item.price)}
                                  </h4>
                                </Form.Label>
                              </Col>

                              <Col>
                                <Button
                                  type="submit"
                                  name={"item_" + i + "," + j}
                                >
                                  Add to Cart
                                </Button>
                              </Col>
                            </Row>
                          </Form.Group>
                        </Form>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* <Button onClick={handleClick}>Sphagetti Button Gimme</Button> */}
      </div>
    </div>
  );
}

export default Menu;
