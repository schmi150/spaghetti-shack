export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      menu_item: item.menu_item,
      menu_price: item.menu_price,
    },
  };
};

export const removeFromCart = () => {
  return {
    type: "REMOVE_FROM_CART",
  };
};
