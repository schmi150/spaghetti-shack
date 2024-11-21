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
                    price: 0,
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
                    price: 0,
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
                    price: 0,
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
    modifierGroupReferences: {
      identifier: 0,
      property1: {
        name: "string",
        guid: "string",
        referenceId: 0,
        multiLocationId: "string",
        masterId: 0,
        posName: "string",
        posButtonColorLight: "string",
        posButtonColorDark: "string",
        pricingStrategy: "string",
        pricingRules: [
          {
            timeSpecificPricingRules: [
              {
                timeSpecificPrice: 0,
                basePrice: 0,
                schedule: [null],
              },
            ],
            sizeSpecificPricingGuid: "string",
            sizeSequencePricingRules: [
              {
                sizeName: "string",
                sizeGuid: "string",
                sequencePrices: [null],
              },
            ],
          },
        ],
        defaultOptionsChargePrice: "NO",
        defaultOptionsSubstitutionPricing: "NO",
        minSelections: 0,
        maxSelections: 0,
        requiredMode: "REQUIRED",
        isMultiSelect: true,
        preModifierGroupReference: 0,
        modifierOptionReferences: [0],
      },
      property2: {
        name: "string",
        guid: "string",
        referenceId: 0,
        multiLocationId: "string",
        masterId: 0,
        posName: "string",
        posButtonColorLight: "string",
        posButtonColorDark: "string",
        pricingStrategy: "string",
        pricingRules: [
          {
            timeSpecificPricingRules: [
              {
                timeSpecificPrice: 0,
                basePrice: 0,
                schedule: [null],
              },
            ],
            sizeSpecificPricingGuid: "string",
            sizeSequencePricingRules: [
              {
                sizeName: "string",
                sizeGuid: "string",
                sequencePrices: [null],
              },
            ],
          },
        ],
        defaultOptionsChargePrice: "NO",
        defaultOptionsSubstitutionPricing: "NO",
        minSelections: 0,
        maxSelections: 0,
        requiredMode: "REQUIRED",
        isMultiSelect: true,
        preModifierGroupReference: 0,
        modifierOptionReferences: [0],
      },
    },
    modifierOptionReferences: {
      identifier: 0,
      property1: {
        referenceId: 0,
        name: "string",
        kitchenName: "string",
        guid: "string",
        multiLocationId: "string",
        masterId: 0,
        description: "string",
        posName: "string",
        posButtonColorLight: "string",
        posButtonColorDark: "string",
        prepStations: ["string"],
        image: "string",
        price: 0,
        pricingStrategy: "string",
        pricingRules: [
          {
            timeSpecificPricingRules: [
              {
                timeSpecificPrice: 0,
                basePrice: 0,
                schedule: [null],
              },
            ],
            sizeSpecificPricingGuid: "string",
            sizeSequencePricingRules: [
              {
                sizeName: "string",
                sizeGuid: "string",
                sequencePrices: [null],
              },
            ],
          },
        ],
        salesCategory: {
          name: "string",
          guid: "string",
        },
        taxInfo: ["string"],
        modifierOptionTaxInfo: {
          taxRateGuids: ["string"],
          overrideItemTaxRates: true,
        },
        itemTags: [
          {
            name: "string",
            guid: "string",
          },
        ],
        plu: "string",
        sku: "string",
        calories: 0,
        contentAdvisories: {
          alcohol: {
            containsAlcohol: "YES",
          },
        },
        unitOfMeasure: "NONE",
        isDefault: true,
        allowsDuplicates: true,
        portions: [
          {
            name: "string",
            guid: "string",
            modifierGroupReferences: [0],
          },
        ],
        prepTime: 0,
        modifierGroupReferences: [0],
      },
      property2: {
        referenceId: 0,
        name: "string",
        kitchenName: "string",
        guid: "string",
        multiLocationId: "string",
        masterId: 0,
        description: "string",
        posName: "string",
        posButtonColorLight: "string",
        posButtonColorDark: "string",
        prepStations: ["string"],
        image: "string",
        price: 0,
        pricingStrategy: "string",
        pricingRules: [
          {
            timeSpecificPricingRules: [
              {
                timeSpecificPrice: 0,
                basePrice: 0,
                schedule: [null],
              },
            ],
            sizeSpecificPricingGuid: "string",
            sizeSequencePricingRules: [
              {
                sizeName: "string",
                sizeGuid: "string",
                sequencePrices: [null],
              },
            ],
          },
        ],
        salesCategory: {
          name: "string",
          guid: "string",
        },
        taxInfo: ["string"],
        modifierOptionTaxInfo: {
          taxRateGuids: ["string"],
          overrideItemTaxRates: true,
        },
        itemTags: [
          {
            name: "string",
            guid: "string",
          },
        ],
        plu: "string",
        sku: "string",
        calories: 0,
        contentAdvisories: {
          alcohol: {
            containsAlcohol: "YES",
          },
        },
        unitOfMeasure: "NONE",
        isDefault: true,
        allowsDuplicates: true,
        portions: [
          {
            name: "string",
            guid: "string",
            modifierGroupReferences: [0],
          },
        ],
        prepTime: 0,
        modifierGroupReferences: [0],
      },
    },
    preModifierGroupReferences: {
      identifier: 0,
      property1: {
        name: "string",
        guid: "string",
        multiLocationId: "string",
        preModifiers: [
          {
            name: "string",
            guid: "string",
            multiLocationId: "string",
            fixedPrice: 0,
            multiplicationFactor: 0,
            displayMode: "PREFIX",
            posName: "string",
            posButtonColorLight: "string",
            posButtonColorDark: "string",
          },
        ],
      },
      property2: {
        name: "string",
        guid: "string",
        multiLocationId: "string",
        preModifiers: [
          {
            name: "string",
            guid: "string",
            multiLocationId: "string",
            fixedPrice: 0,
            multiplicationFactor: 0,
            displayMode: "PREFIX",
            posName: "string",
            posButtonColorLight: "string",
            posButtonColorDark: "string",
          },
        ],
      },
    },
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
              {/* {menu_build.item_choice.map((menuItem, i) => {
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
