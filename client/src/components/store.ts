import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart/cartSlice';
import adminReducer from './Admin/adminSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    admin: adminReducer,
  },
});
