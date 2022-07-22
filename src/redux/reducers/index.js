import {combineReducers} from '@reduxjs/toolkit';

import filtersReducer from './filters';
import productsReducer from './products';

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
});

export default rootReducer;