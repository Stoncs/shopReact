const initialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
}

const cart = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: [action.payload]
      }
      return {
        ...state,
        items: newItems,
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + newItems[action.payload.id][0].price,
      }
    }

    case 'PLUS_CART_ITEM': {
      const newItems = {
        ...state.items,
        [action.payload.id]: [action.payload]
      }
      return {
        ...state,
        items: newItems,
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + state.items[action.payload.id][0].price,
      }
    }

    case 'MINUS_CART_ITEM': {
      const newItems = {
        ...state.items,
        [action.payload.id]: [action.payload]
      }
      
      if (newItems[action.payload.id][0].count <= 0) delete newItems[action.payload.id]
      
      return {
        ...state,
        items: newItems,
        totalAmount: state.totalAmount - 1,
        totalPrice: state.totalPrice - state.items[action.payload.id][0].price,
      }
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        items: [],
        totalAmount: 0,
        totalPrice: 0,
      }
    }
    default:
      return state;

  }
}

export default cart;