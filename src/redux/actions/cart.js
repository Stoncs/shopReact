export const addProductCart = (obj) => {
  return {
    type: 'ADD_PRODUCT_CART',
    payload: obj,
  }
}

export const plusProductCart = (obj) => {
  return {
    type: 'PLUS_CART_ITEM',
    payload: obj
  }
}

export const minusProductCart = (obj) => {
  return {
    type: 'MINUS_CART_ITEM',
    payload: obj
  }
}

export const clearProductCart = () => {
  return {
    type: 'CLEAR_CART',
  }
}