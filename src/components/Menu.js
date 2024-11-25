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
  // const menu_items = {
  //   build_shack: [
  //     {
  //       box_description: "BUILD YOUR SHACK",
  //       item_choice: [
  //         [
  //           {
  //             item: "Small Shack",
  //             price: 8.99,
  //           },
  //           {
  //             item: "Mid Shack",
  //             price: 15.99,
  //           },
  //           {
  //             item: "Full Shack",
  //             price: 27.99,
  //           },
  //         ],

  //         [
  //           {
  //             item: "spaghetti",
  //           },
  //           {
  //             item: "penne",
  //           },
  //         ],
  //         [
  //           {
  //             item: "Classic Red",
  //             price: 0.0,
  //           },
  //           {
  //             item: "Pink Sauce",
  //             price: 1.5,
  //           },
  //           {
  //             item: "Alfredo",
  //             price: 3.0,
  //           },
  //         ],
  //         [
  //           {
  //             item: "Meatball",
  //             price: 1.99,
  //           },
  //           {
  //             item: "Italian Sausage Link",
  //             price: 3.99,
  //           },
  //           {
  //             item: "Breaded Chicken Breast",
  //             price: 3.99,
  //           },
  //         ],
  //       ],
  //     },
  //   ],
  // };

  const toast_menu = {
    restaurantGuid: "ea0a8ddc-1996-4cd1-bc9b-c9aaabff38dc",
    lastUpdated: "string",
    restaurantTimeZone: "string",
    menus: [
      {
        name: "Lunch Menu",
        guid: "1",
        multiLocationId: "string",
        masterId: 0,
        description: "string",
        posButtonColorLight: "string",
        posButtonColorDark: "string",
        highResImage: "string",
        image: "string",
        availability: {},
        menuGroups: [
          {
            name: "BUILD YOUR SHACK",
            guid: "string",
            multiLocationId: "string",
            masterId: 0,
            description: "string",
            posName: "string",
            posButtonColorLight: "string",
            posButtonColorDark: "string",
            image: "string",
            itemTags: [
              {
                name: "string",
                guid: "string",
              },
            ],
            menuGroups: [
              {
                name: "1. PICK YOUR SIZE",
                guid: "string",
                multiLocationId: "string",
                masterId: 0,
                description: "string",
                posName: "string",
                posButtonColorLight: "string",
                posButtonColorDark: "string",
                image: "string",
                itemTags: [
                  {
                    name: "string",
                    guid: "string",
                  },
                ],
                menuGroups: [{}],
                menuItems: [
                  {
                    name: "Small Shack",
                    kitchenName: "string",
                    guid: "A1",
                    multiLocationId: "string",
                    masterId: 0,
                    description: "string",
                    posName: "string",
                    posButtonColorLight: "string",
                    posButtonColorDark: "string",
                    image: "string",
                    price: 8.99,
                    pricingStrategy: "BASE_PRICE",
                    pricingRules: [null],
                    isDeferred: true,
                    isDiscountable: true,
                    salesCategory: {
                      name: null,
                      guid: null,
                    },
                    taxInfo: [null],
                    taxInclusion: "TAX_INCLUDED",
                    itemTags: [null],
                    plu: "string",
                    sku: "string",
                    calories: 0,
                    contentAdvisories: {
                      alcohol: null,
                    },
                    unitOfMeasure: "NONE",
                    portions: [null],
                    prepTime: 0,
                    prepStations: [null],
                    modifierGroupReferences: [null],
                  },
                  {
                    name: "Mid Shack",
                    kitchenName: "string",
                    guid: "A2",
                    multiLocationId: "string",
                    masterId: 0,
                    description: "string",
                    posName: "string",
                    posButtonColorLight: "string",
                    posButtonColorDark: "string",
                    image: "string",
                    price: 15.99,
                    pricingStrategy: "BASE_PRICE",
                    pricingRules: [null],
                    isDeferred: true,
                    isDiscountable: true,
                    salesCategory: {
                      name: null,
                      guid: null,
                    },
                    taxInfo: [null],
                    taxInclusion: "TAX_INCLUDED",
                    itemTags: [null],
                    plu: "string",
                    sku: "string",
                    calories: 0,
                    contentAdvisories: {
                      alcohol: null,
                    },
                    unitOfMeasure: "NONE",
                    portions: [null],
                    prepTime: 0,
                    prepStations: [null],
                    modifierGroupReferences: [null],
                  },
                  {
                    name: "Full Shack",
                    kitchenName: "string",
                    guid: "A3",
                    multiLocationId: "string",
                    masterId: 0,
                    description: "string",
                    posName: "string",
                    posButtonColorLight: "string",
                    posButtonColorDark: "string",
                    image: "string",
                    price: 27.99,
                    pricingStrategy: "BASE_PRICE",
                    pricingRules: [null],
                    isDeferred: true,
                    isDiscountable: true,
                    salesCategory: {
                      name: null,
                      guid: null,
                    },
                    taxInfo: [null],
                    taxInclusion: "TAX_INCLUDED",
                    itemTags: [null],
                    plu: "string",
                    sku: "string",
                    calories: 0,
                    contentAdvisories: {
                      alcohol: null,
                    },
                    unitOfMeasure: "NONE",
                    portions: [null],
                    prepTime: 0,
                    prepStations: [null],
                    modifierGroupReferences: [null],
                  },
                ],
              },
              {
                name: "1. PICK YOUR SIZE",
                guid: "string",
                multiLocationId: "string",
                masterId: 0,
                description: "string",
                posName: "string",
                posButtonColorLight: "string",
                posButtonColorDark: "string",
                image: "string",
                itemTags: [
                  {
                    name: "string",
                    guid: "string",
                  },
                ],
                menuGroups: [{}],
                menuItems: [
                  {
                    name: "Small Shack",
                    kitchenName: "string",
                    guid: "A1",
                    multiLocationId: "string",
                    masterId: 0,
                    description: "string",
                    posName: "string",
                    posButtonColorLight: "string",
                    posButtonColorDark: "string",
                    image: "string",
                    price: 8.99,
                    pricingStrategy: "BASE_PRICE",
                    pricingRules: [null],
                    isDeferred: true,
                    isDiscountable: true,
                    salesCategory: {
                      name: null,
                      guid: null,
                    },
                    taxInfo: [null],
                    taxInclusion: "TAX_INCLUDED",
                    itemTags: [null],
                    plu: "string",
                    sku: "string",
                    calories: 0,
                    contentAdvisories: {
                      alcohol: null,
                    },
                    unitOfMeasure: "NONE",
                    portions: [null],
                    prepTime: 0,
                    prepStations: [null],
                    modifierGroupReferences: [null],
                  },
                  {
                    name: "Mid Shack",
                    kitchenName: "string",
                    guid: "A2",
                    multiLocationId: "string",
                    masterId: 0,
                    description: "string",
                    posName: "string",
                    posButtonColorLight: "string",
                    posButtonColorDark: "string",
                    image: "string",
                    price: 15.99,
                    pricingStrategy: "BASE_PRICE",
                    pricingRules: [null],
                    isDeferred: true,
                    isDiscountable: true,
                    salesCategory: {
                      name: null,
                      guid: null,
                    },
                    taxInfo: [null],
                    taxInclusion: "TAX_INCLUDED",
                    itemTags: [null],
                    plu: "string",
                    sku: "string",
                    calories: 0,
                    contentAdvisories: {
                      alcohol: null,
                    },
                    unitOfMeasure: "NONE",
                    portions: [null],
                    prepTime: 0,
                    prepStations: [null],
                    modifierGroupReferences: [null],
                  },
                  {
                    name: "Full Shack",
                    kitchenName: "string",
                    guid: "A3",
                    multiLocationId: "string",
                    masterId: 0,
                    description: "string",
                    posName: "string",
                    posButtonColorLight: "string",
                    posButtonColorDark: "string",
                    image: "string",
                    price: 27.99,
                    pricingStrategy: "BASE_PRICE",
                    pricingRules: [null],
                    isDeferred: true,
                    isDiscountable: true,
                    salesCategory: {
                      name: null,
                      guid: null,
                    },
                    taxInfo: [null],
                    taxInclusion: "TAX_INCLUDED",
                    itemTags: [null],
                    plu: "string",
                    sku: "string",
                    calories: 0,
                    contentAdvisories: {
                      alcohol: null,
                    },
                    unitOfMeasure: "NONE",
                    portions: [null],
                    prepTime: 0,
                    prepStations: [null],
                    modifierGroupReferences: [null],
                  },
                ],
              },
            ],
            menuItems: [{}],
          },
        ],
      },
    ],
  };
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
              {menu_build.menuGroups.map((menu_groups, i) => {
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
