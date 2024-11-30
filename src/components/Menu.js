import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch, useStore } from "react-redux";
import { addToCart } from "../actions/cartActions";
import toast_menu from "../menu.json";

function Menu() {
  const dispatch = useDispatch();
  let selector = useSelector((state) => state.cart);
  const store = useStore();
  // cont[(index, setIndex)] = useState("");

  console.log(toast_menu);

  const handleClick = (e) => {
    e.preventDefault();
    // const index = e.target.elements[0].name.substring(5).split(",");
    // //console.log(e.target.elements[0].name.substring(5));
    // dispatch(
    //   addToCart({
    //     menu_item:
    //       menu_items.build_shack[0].item_choice[index[0]][index[1]].item,
    //     menu_price:
    //       menu_items.build_shack[0].item_choice[index[0]][index[1]].price,
    //   })
    // );

    // selector = store.getState().cart;
  };
  return (
    <div>
      <h1>Sphagetti Shack Menu!!</h1>
      <div>
        {toast_menu.menus.map((menu_build, k) => {
          return (
            <div>
              <h2>{menu_build.name}</h2>
              {/* {menu_build.menuGroups.map((menu_groups, i) => {
                return (
                  <div>
                    <h3>{menu_groups.name}</h3>
                    {menu_groups.menuGroups.map((menu_subGroups, i) => {
                      return (
                        <div>
                          <h3>{menu_subGroups.name}</h3>
                          {menu_subGroups.menuItems.map((item, j) => {
                            return (
                              <Form onSubmit={handleClick} key={i + "," + j}>
                                <Form.Group controlid={"menu_item_" + j}>
                                  <Row>
                                    <Col>
                                      <Form.Label>
                                        <h4>
                                          {item.name +
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
              })} */}
            </div>
          );
        })}
        {/* <Button onClick={handleClick}>Sphagetti Button Gimme</Button> */}
      </div>
    </div>
  );
}

export default Menu;
