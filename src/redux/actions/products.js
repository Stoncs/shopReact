
export const setLoaded = (payload) => ({
  type: 'SET_LOADING',
  payload
});

export const fetchProducts = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  fetch(`http://localhost:3001/products?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
  .then((resp) => resp.json())
  .then((json) => {
    dispatch(setProducts(json));
  })
}
export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
})