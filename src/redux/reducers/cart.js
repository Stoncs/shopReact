const initialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
}

const cart = (state = initialState, action) => {
  const newItems = {
    ...state.items,
    [action.payload]: [action.payload]
  }

  switch (action.type) {
    case 'ADD_PRODUCT_CART':

      // newItems[action.payload.id][0].count === undefined 
      // ? newItems[action.payload.id][0].count = 1 
      // : ++newItems[action.payload.id][0].count
      return {
        ...state,
        items: newItems,
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + newItems[action.payload][0].price,
      }

    case 'PLUS_CART_ITEM':
      return {
        ...state,
        items: newItems,
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + state.items[action.payload][0].price,
      }

    case 'MINUS_CART_ITEM':
      return {
        ...state,
        items: newItems,
        totalAmount: state.totalAmount - 1,
        totalPrice: state.totalPrice - state.items[action.payload][0].price,
      }
    default:
      return state;

  }
}

export default cart;