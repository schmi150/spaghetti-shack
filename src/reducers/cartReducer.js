const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let temp_state = [...state];

      temp_state.push({
        menu_item: action.payload.menu_item,
        menu_price: action.payload.menu_price,
      });
      state = temp_state;
      console.log(state);
      return state;
    case "REMOVE_FROM_CART":
      state.splice(action.payload.index, 1);
      return state;
    default:
      return state;
  }
};

export default cartReducer;
