export const fetchProducts = () => (dispatch) => {
  fetch('http://localhost:3001/products')
  .then((resp) => resp.json())
  .then((json) => {
    dispatch(setProducts(json));
  })
}
export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
})