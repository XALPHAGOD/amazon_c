export const reducer = (state, action) => {
  // console.log(state);
  switch (action.name) {
    case "AddToCart":
      return {
        ...state,
        cart: [...state.cart, action.item],
        item_count: state.item_count + 1,
        subtotal: state.subtotal + action.item.price,
      };
    case "RemoveFromCart":
      let index = state.cart.findIndex((item) => item === action.item);
      let cart = [...state.cart];
      cart.splice(index, 1);
      return {
        ...state,
        cart,
        item_count: state.item_count - 1,
        subtotal: state.subtotal - action.item.price,
      };
    case "PaymentSuccess":
      return { ...state, cart: [], item_count: 0, subtotal: 0 };
    case "SignIn":
      return { ...state, user: action.item.email, uid: action.item.uid };
    case "SignOut":
      return {
        ...state,
        cart: [],
        item_count: 0,
        subtotal: 0,
        user: null,
        uid: null,
      };
    default:
      return state;
  }
};
