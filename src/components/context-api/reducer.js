// Initital State of the Data layer
export const initalState = {
  // Shopping basket (array)
  basket: [],
  user: null,
};

// Get the SubTotal value of the baskets
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
console.log(getBasketTotal);

// State is the current statte of the app
// Action is what are you trying to do, etc: add, remove, edit
const reducer = (state, action) => {
  // Helps track the action
  console.log(action);
  // Diffrent reducers for diffrent actions
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    // ADD's item to the basket
    case "ADD_TO_BASKET":
      return {
        //   Original State
        ...state,
        // Takes the current basket state + the added(pushed) item
        basket: [...state.basket, action.item],
      };
    // Deletes item from basket
    case "REMOVE_FROM_BASKET":
      // New basket, with current basket items
      let newBasket = [...state.basket];
      // Creates index to find basket u want to delete
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // If item exists in basket, remove it
        newBasket.splice(index, 1);
      }

      // Returns new basket
      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
};

export default reducer;
