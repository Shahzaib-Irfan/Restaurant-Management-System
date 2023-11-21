import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, restaurant, date, amount, dish } = action.payload;
    const tempProduct = state.cart.find((dish) => dish.id === id);
    if (tempProduct) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newProduct = {
        id: id,
        restaurant,
        date,
        dish,
        amount,
        image: dish.images,
      };
      return { ...state, cart: [...state.cart, newProduct] };
    }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, type } = action.payload;
    const tempItems = state.cart.map((product) => {
      if (product.id === id) {
        let newAmount = product.amount;
        if (type === "increase") {
          newAmount += 1;
          if (newAmount > product.max) {
            newAmount = product.max;
          }
        }
        if (type === "decrease") {
          newAmount -= 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
        }
        return { ...product, amount: newAmount };
      }
      return product;
    });
    return { ...state, cart: tempItems };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((product) => {
      if (product.id !== action.payload) {
        return product;
      }
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { cart } = state;
    const { totalItems, amountPayable } = cart.reduce(
      (total, item) => {
        const { amount, dish } = item;
        total.totalItems += amount;
        total.amountPayable += dish.price * amount;
        return total;
      },
      { totalItems: 0, amountPayable: 0 }
    );
    return { ...state, totalItems, amountPayable };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
